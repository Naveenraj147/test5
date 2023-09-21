import { LightningElement } from 'lwc';

export default class MainProgressBar extends LightningElement {
    showAccount = true;
    showContact = false;
    showOpportunity = false;
    currentStep = 'Account';
    accountPhone;
    accountName;
    closeDate;
    oppStage;
    oppName;
    contactName;
    contactEmail;
    stepvalues =[
        { label: 'Account', value: 'Account' },
        { label: 'Contact', value: 'Contact' },
        { label: 'Opportunity', value: 'Opportunity' }
    ];
    handleNext(event){
        console.log('reached');
        console.log(event.detail.showOpportunity);
        this.showAccount = event.detail.showAccount;
        this.showContact = event.detail.showContact;
        this.showOpportunity = event.detail.showOpportunity;
        this.currentStep = event.detail.currentStep;
        if(event.detail.accountName){
            this.accountName = event.detail.accountName;
            this.accountPhone = event.detail.accountPhone;
        }
        if(event.detail.contactName){
            this.contactEmail = event.detail.contactEmail;
            this.contactName = event.detail.contactName;
        }
        if(event.detail.oppName){
            this.oppName = event.detail.oppName;
            this.oppStage = event.detail.oppStage;
            this.closeDate = event.detail.closeDate;
        }
        
        
        console.log(this.accountName);
        console.log(this.accountPhone);
        console.log(this.contactName);
        console.log(this.contactEmail);
        console.log(this.oppName);
        console.log(this.oppStage);
        console.log(this.closeDate);
    }
    handlePre(event){
        this.showAccount = event.detail.showAccount;
        this.showContact = event.detail.showContact;
        this.showOpportunity = event.detail.showOpportunity;
        this.currentStep = event.detail.currentStep;
    }

}