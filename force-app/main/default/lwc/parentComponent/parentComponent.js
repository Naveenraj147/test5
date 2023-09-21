import { LightningElement, wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { NavigationMixin } from 'lightning/navigation';

export default class ParentComponent extends NavigationMixin (LightningElement)  {
    displayRecords;
    records;
    error;
    showButton =true;
    @wire(getAccounts)
    accountRecords({data,error}){
        if(data){
            this.records = data;
            this.error = undefined;
            console.log('records',this.records);
            this.displayRecords = this.records.slice(0, 5);
        }
        if(error){
            this.records = undefined;
            this.error = error;
        }
    }
    handleClick(event){
        console.log('clicked',event.currentTarget.dataset.value)
        const recId = event.currentTarget.dataset.value;
        console.log('Id',recId)
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
       attributes: {
           recordId: recId,
           objectApiName: 'Account',
           actionName: 'view'
            }
        });
    
    }
    handleButtonClick(){
        let newLength = this.displayRecords.length + 5;
        if (newLength > this.records.length) {
            newLength = this.records.length
            this.showButton = false;
        }
         this.displayRecords = this.records.slice(0, newLength);
      } 
    }

