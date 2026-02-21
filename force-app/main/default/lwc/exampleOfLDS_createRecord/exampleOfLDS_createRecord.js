import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class ExampleOfLDS_createRecord extends LightningElement {

    //[SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact)];

    accountId;
    name = '';

    handleNameChange(event){
        //this.accountId = undefined;
        this.name = event.target.value;
        console.log('name== '+this.name);
    }

    hanldeCreateAccount(){

        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        console.log('fields== '+this.fields);
        
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        console.log('recordInput== '+this.recordInput);

        createRecord(recordInput)
        .then(account => {
            console.log('account== '+JSON.stringify(account));
            this.accountId = account.Id;
        })
        .catch(error => {
            console.error('error== '+JSON.stringify(error));
        });
    }
}