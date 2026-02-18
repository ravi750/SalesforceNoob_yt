import { LightningElement, wire, api } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class GetObjectInfoDemo extends LightningElement {

    contactinfo;
    contacterror;

    @wire(getObjectInfo, {
        objectApiName: [CONTACT_OBJECT]
    })
    outputFunction({data, error}){
        if(data){
            console.log('data== ', data);
            this.contactinfo = data;
            this.contacterror = null;
        }
        else if(error){
            console.log('error== ', error);
            this.contacterror = error;
            this.contactinfo = null;
        }
    }
}