import { LightningElement } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import ACCOUNT_FIELD from '@salesforce/schema/Account';
import ID_FIELD from '@salesforce/schema/Account.Id';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class ExampleOfLDS_updateRecord extends LightningElement {

    idValue = '';
    nameValue = '';

    handleRecordId(event){
        this.idValue = event.target.value;
    }

    handleRecordName(event){
        this.nameValue = event.target.value;
    }

    handleAccountRecord(){

        const fields = {};

        fields[ID_FIELD.fieldApiName] = this.idValue;
        fields[NAME_FIELD.fieldApiName] = this.nameValue;
        console.log('fields== '+JSON.stringify(fields));

        const inputRecord = { fields };
        updateRecord(inputRecord)
        .then(result => {
            console.log('result== '+JSON.stringify(result));
        })
        .catch(error => {
            console.log('error== '+JSON.stringify(error));
        });

    }
}