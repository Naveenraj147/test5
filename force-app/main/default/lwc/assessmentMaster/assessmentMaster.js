import { LightningElement, wire, track,api } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Qualification_Details__c from '@salesforce/schema/Contact.Qualification_Details__c';
import Qualification_Status__c from '@salesforce/schema/Contact.Qualification_Status__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import AccountId from '@salesforce/schema/Contact.AccountId';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import checkCon from '@salesforce/apex/LWCAssessment.checkCon';
import { CloseActionScreenEvent } from 'lightning/actions';
const fields = [Qualification_Status__c,Qualification_Details__c, AccountId];

export default class AssessmentMaster extends LightningElement {
    @track picVal = []
    selectedValue;
    @api recordId;
    accId;
    showError = false;
    oppId;

    handleSubmit(event){
        console.log('Submit Is clicked');
        console.log('pic -->',this.picVal)
        event.preventDefault(); //stop default behaviour of submit

       

        checkCon({
            accId: this.accId,
            conId: this.recordId,
            oppId:this.oppId,
        })
        .then(result =>{
            console.log('Results', result);
            this.records = result;
            this.errors = undefined;
            if(result ==='already present'){
                const evt = new ShowToastEvent({
                    title: 'success',
                    message: 'Already Present',
                    variant: 'success',
                });
                this.dispatchEvent(evt);
            }
        })
        .catch(error => {
            console.log(error);
            this.records = undefined;
            this.errors = error;
        })

        this.dispatchEvent(new CloseActionScreenEvent());


    }
    handleOppId(event){
        this.oppId = event.detail;
        console.log('Parent opp --->',this.oppId);
    }

    handleChange(event){
        this.accId = event.target.value; 
        console.log('Selected-->',this.accId);
        
        
    }
    @wire(getRecord, { recordId: '$recordId',fields })
    account({data,error}){
        if(data){
            if(data.fields.Qualification_Status__c.value !== 'Qualified'){
                this.showError =true;
            }
            console.log(data.fields.AccountId.value)
            this.accId = data.fields.AccountId.value;
            console.log('AccId ---> ',this.accId);
           
        }
        if(error){
           console.log('error')
        }
    }
    

    @wire(getPicklistValues,{recordTypeId:'012000000000000AAA',fieldApiName:Qualification_Details__c})
    values({data,error}){
        if(data){
            this.picVal = data.values;
   
        }
        if(error){
            console.log('Error');
        }

       
}
}