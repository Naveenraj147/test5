import { LightningElement } from 'lwc';

export default class ContactComponent extends LightningElement {
    contactEmail;
    contactName;
    handleClick(event){
        if(event.target.name == 'next'){
            const newEvent = new CustomEvent(
                'next',
            {
                   detail: {
                    showContact : false,
                    showAccount : false,
                    showOpportunity : true,
                    currentStep : 'Opportunity',
                    contactName: this.contactName,
                    contactEmail: this.contactEmail
                   }
        
            });
            alert(this.contactName, this.contactEmail)
            this.dispatchEvent(newEvent);
        }
        else if(event.target.name == 'pre'){
            const newEvent = new CustomEvent(
                'pre',
            {
                   detail: {
                    showContact : false,
                    showAccount : true,
                    showOpportunity : false,
                    currentStep : 'Account'
                   }
            });
            this.dispatchEvent(newEvent);
        }

        
    }
    handleChange(event){
        if(event.target.name == 'lastName'){
            this.contactName = event.target.value;
            console.log(this.contactName);
        }
        else if(event.target.name == 'email'){
            this.contactEmail = event.target.value;
        }
    
    }
}