import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import CONTACT_PHONE from '@salesforce/schema/Account.Phone';

export default class Ex_OF_LDS extends LightningElement {
    //Tech Journey With Ankit -- Day 26

    @api recordId;

    conName;
    conPhone;

    @wire(getRecord, {
        recordId : '$recordId',
        fields : [CONTACT_NAME, CONTACT_PHONE]
    }) 
    outputFunction({ data, error }){
        if (data) {
            console.log('data ', data);
            //this.conName = data.fields.Name.value;
            //this.conPhone = data.fields.Phone.value;
            this.conName = getFieldValue(data, CONTACT_NAME);
            this.conPhone = getFieldValue(data, CONTACT_PHONE);
        } else if(error){
            console.log('error ', error);
        }
    }
}
