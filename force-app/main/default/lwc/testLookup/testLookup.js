import { LightningElement } from 'lwc';
import getAccountsByNameKeyword from '@salesforce/apex/NormalLookupController.getAccountsByNameKeyword';
export default class TestLookup extends LightningElement {
    recordsList;
    keyword;
    message;
    selectedRecordId;
    selectedValue;

    getLookupResult() { 

        getAccountsByNameKeyword({ keyword: this.keyword })  
        
            .then((result) => {  
        
            if (result.length===0) {  
        
            this.recordsList = [];  
        
            this.message = "No Records Found";  
        
            } else {  
        
            this.recordsList = result;  
        
            this.message = "";  
        
            }  
        
            this.error = undefined;  
        
            })  
        
            .catch((error) => {  
        
            this.error = error;  
        
            this.recordsList = undefined;  
        
            });  
        
        }
        
        
        
        onRecordSelection(event) {  
        
        this.selectedRecordId = event.target.dataset.key;  
        
        this.selectedValue = event.target.dataset.name;  
        
        this.keyword = "";  
        
        this.onSelecetedRecordUpdate();  
        
        }
}