import { LightningElement } from 'lwc';
import sendMessage from '@salesforce/apex/ChatGPTController.sendMessage';

export default class ChatGPTComponent extends LightningElement {

    qustion;
    records;
    errors;
    showSpinner;
    
    handleChange(event){
        this.qustion = event.target.value;
    }

    handleClick(){
        this.records = undefined;
        this.showSpinner = true;
        
        sendMessage({
            qustion: this.qustion
        })
        .then(result =>{
            console.log('Results', result);
            this.records = result;
            this.errors = undefined;
            this.showSpinner = false;
            this.template.querySelector('form').reset();
            
        })
        .catch(error => {
            console.log(error);
            this.records = undefined;
            this.errors = error;
            this.showSpinner = false;
        })
    }

}