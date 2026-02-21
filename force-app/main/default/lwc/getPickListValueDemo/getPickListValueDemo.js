import { LightningElement, wire, api } from 'lwc';
import {getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';

export default class GetPickListValueDemo extends LightningElement {

    @wire(getObjectInfo, {
        objectApiName : CONTACT_OBJECT
    })
    contactprop;

    @wire(getPicklistValues, {
        recordTypeId : '$contactprop.defaultRecordTypeId',
        fieldApiName : CONTACT_PHONE
    }) outputFunction({data, error}){
        if(data){
            console.log('data== ', data);
        }
        else if(error){
            console.log('error== ', error);
        }
    }
}