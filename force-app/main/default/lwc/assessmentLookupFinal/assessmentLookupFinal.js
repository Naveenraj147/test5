import { LightningElement, api, track } from 'lwc';
import findRecordsByAcc from '@salesforce/apex/LookupController.findRecordsByAcc';

export default class LookupParent extends LightningElement {
    @api fieldName;
    @api objectApiName;
    @api iconname = 'standard:account';
    @api accId;
    @track records;
    @track errors;
    @track selectedRecord;
    seldata;

    
    handleSearch(event){
        console.log('parent');
        console.log(this.accId);

        const searchValue = event.detail;
        console.log('val',searchValue);
    if(this.objectApiName !== undefined && this.fieldName !== undefined){
        console.log('objectApiName',this.objectApiName)
        console.log('fieldName',this.fieldName)
        console.log('searchValue',searchValue)
        console.log('accId',this.accId)
        findRecordsByAcc({
            objectApiName: this.objectApiName,
            fieldName: this.fieldName,
            searchValue:searchValue,
            accId: this.accId
        })
        .then(result =>{
            console.log('Results', result);
            this.records = result;
            this.errors = undefined;
        })
        .catch(error => {
            console.log(error);
            this.records = undefined;
            this.errors = error;
        })
    }
        
    }
    handleSelect(event){
        const accountId = event.detail;
        const selectedRec = this.records.find(account=> account.Id === accountId );
        console.log('Selected Rec',selectedRec);
       // console.log('Selected RecID',selectedRec.originalTarget.Id);
       console.log('Selected RecID',JSON.stringify(selectedRec));
        this.seldata = JSON.parse(JSON.stringify(selectedRec));
       console.log('Id-->',this.seldata.Id);
        this.selectedRecord = selectedRec;
        const oppEvent = new CustomEvent(
            'oppid',{
                detail:this.seldata.Id
            }
        );
        this.dispatchEvent(oppEvent);
    }
        

        
    
    handleRemove(){
        this.selectedRecord = undefined;
        this.errors = undefined;
        this.records = undefined;

        const oppEvent = new CustomEvent(
            'oppid',{
                detail:undefined
            }
        );
        this.dispatchEvent(oppEvent);
    }
}