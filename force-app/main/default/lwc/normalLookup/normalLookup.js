import { LightningElement, wire, track, api} from 'lwc';
import getAccountsByNameKeyword from '@salesforce/apex/NormalLookupController.getAccountsByNameKeyword';

export default class SearchContact extends LightningElement {
    accounts;
    wor;
    @api iconName = 'standard:account';
    selectedRecord;


    handleChange(event){
        this.wor=event.target.value;
        console.log(this.wor);
    }
    handelSelectedRecord(event){
        var objId = event.target.getAttribute('data-recid');
        console.log(objId);
        this.selectedRecord = objId
    }
    @wire(getAccountsByNameKeyword,{keyword:'$wor'})
    stringSearch(result){
       this.accounts = result.data;
       // this.accounts = JSON.parse(JSON.stringify(result.data));
       
        /*this.accounts.forEach(element => {
          //  statusOptions.push({ value: element.Id, label: element.Name, description: 'A new item' });
            console.log(element);
        });*/
    }   
}
