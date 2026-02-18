import { LightningElement, api } from 'lwc';
import LightningAlert from 'lightning/alert';

export default class LwcChild extends LightningElement {
    // this is salesforce noob 51st videos

    @api async sayHi(){
        await LightningAlert.open({
            message: 'Hi, Salesforce Noob',
            theme: 'success',
            label: 'Greetings'
        });
    }
}