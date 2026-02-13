import { LightningElement, api } from 'lwc';
import { CloseActionScreenEVent} from 'lightning/actions';
import { updateRecord} from 'lightning/uiRecordApi';
import ID_field from '@salesforce/schema/Account.Id';
import Phone_field from '@salesforce/schema/Account.Phone';

export default class LwcUpdateUsingScreenAction extends LightningElement {

    @api recordId;
    userInput;

    handleChange(event){
        this.userInput = event.target.value;
        console.log('user input=== ', this.userInput);
    }

    handleClick(){
        const temp = {};
        temp[ID_field.fieldApiName] = this.recordId;
        temp[Phone_field.fieldApiName] = this.userInput;

        const recordInput = {
            fields:temp
        }
        console.log('recordInput== ', JSON.stringify(recordInput));
        updateRecord(recordInput)
        .then(result =>{
            console.log('result== ', JSON.stringify(result));
        })
        .catch(error =>{
            console.log('error== ', JSON.stringify(error));
        })

        this.dispatchEvent(new CloseActionScreenEVent());
    }
}