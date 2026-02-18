import { LightningElement } from 'lwc';

export default class LwcRefsDemo extends LightningElement {

    handleChanges(){
        let para = this.refs.myText;
        para.className = 'red_text';
    }

    handleChildLwc(){
        //this.template.querySelector('c-lwc-child').sayHi();

       // this.refs.myLwcChild.sayHi();
       let childLwc = this.refs.myLwcChild;
       childLwc.sayHi();
    }
}