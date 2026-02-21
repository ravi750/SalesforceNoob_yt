import { LightningElement, wire, api } from 'lwc';
import {getRecord, deleteRecord} from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
//import ACCOUNT_OWNER from '@salesfroce/schema/Account.Owner.Name';

const FIELDS = [ACCOUNT_NAME, ACCOUNT_INDUSTRY, ACCOUNT_PHONE]//, ACCOUNT_OWNER];

export default class ExampleOfLDS_deleteRecord extends LightningElement {

    @api recordId;

    accountDetails;
    accountId;
    accountName;
    industry;
    phone;
    //owner;

    handleRecordId(event){
        this.recordId = event.detail.value;
    }

    @wire(getRecord, { 
        recordId : '$recordId', 
        fields:FIELDS 
    })
    accountsData({error, data}){

        if(error){
            console.error('Error== '+JSON.stringify(error));
        }
        else{
            if(data){
                this.accountDetails = data;
                console.log('this.accountDetails== '+JSON.stringify(this.accountDetails));

                this.accountId = this.accountDetails.id;
                //this.accountName = this.accountDetailsfields.fields.Name.value;
                //this.industry = this.accountDetails.fields.Industry.value;
                //this.phone = this.accountDetails.fields.Phone.value;
                //this.owner = this.accountDetails.fields.Owner.value;
            }
        }
    }
}