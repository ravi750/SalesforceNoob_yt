import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; 

export default class ExampleOfNavigationLWC extends NavigationMixin(LightningElement) {

    handleClickNavigation(){

        // navigate to the Account object home page
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__recordPage',
        //     attributes:{
        //         objectApiName: 'Account',
        //         actionName: 'home' 
        //     }
        // })

        //navigate to URL i.e. youtube
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes:{
                url : 'https://www.youtube.com/' 
            }
        })
    }
}