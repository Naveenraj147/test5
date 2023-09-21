import { LightningElement } from 'lwc';

export default class AccountComponent extends LightningElement {
    accountName;
    accountPhone;

    handleClick(){
    console.log('next button clicked');
    
    
    const newEvent = new CustomEvent(
        'next',
    {
           detail: {
            showContact : true,
            showAccount : false,
            showOpportunity : false,
            currentStep : 'Contact',
            accountName : this.accountName,
            accountPhone : this.accountPhone
           }

    });
    console.log(this.accountName);
    this.dispatchEvent(newEvent);
}
handleChange(event){
    if(event.target.name == 'name'){
        this.accountName = event.target.value;
        console.log(this.accountName);
    }
    else if(event.target.name == 'phone'){
        this.accountPhone = event.target.value;
    }

}
    
}