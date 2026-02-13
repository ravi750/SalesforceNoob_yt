import { LightningElement } from 'lwc';

export default class LwcRefsDemo extends LightningElement {

    handleChanges(){
        let para = this.refs.myText;
        para.className = 'red_text';
    }
}