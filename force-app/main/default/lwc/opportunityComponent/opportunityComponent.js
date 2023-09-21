import { LightningElement, wire, track } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import StageName from '@salesforce/schema/Opportunity.StageName';
export default class OpportunityComponent extends LightningElement {
    @track picVal;
    oppName;
    oppStage;
    closeDate;
    handleChange(event){
        if(event.target.name == 'oppStage'){
            this.oppStage = event.target.value;
        }
        if(event.target.name == 'closeDate'){
            this.closeDate = event.target.value;
        }
        if(event.target.name == 'oppName'){
            this.oppName = event.target.value;
        }
    }
    handleClick(event){
        if(event.target.name == 'Save'){
            
            const newEvent = new CustomEvent(
                'next',
            {
                   detail: {
                    showContact : false,
                    showAccount : true,
                    showOpportunity : false,
                    currentStep : 'Account',
                    oppName : this.oppName,
                    oppStage: this.oppStage,
                    closeDate: this.closeDate
                   }
            });

            alert(this.oppName, this.oppStage)
            this.dispatchEvent(newEvent);
            alert('saved');
        }
        else if(event.target.name == 'pre'){
            const newEvent = new CustomEvent(
                'pre',
            {
                   detail: {
                    showContact : true,
                    showAccount : false,
                    showOpportunity : false,
                    currentStep : 'Contact'
                   }
            });
            this.dispatchEvent(newEvent);
        }
        
    }
    @wire(getPicklistValues,{recordTypeId:'012000000000000AAA',fieldApiName:StageName})
    values({data,error}){
        if(data){
            this.picVal = data.values;
        }
        if(error){

        }
    }
}