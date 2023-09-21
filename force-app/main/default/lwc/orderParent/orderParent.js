import { LightningElement, wire} from 'lwc';
import getOrders from '@salesforce/apex/OrderController.getOrders';
export default class ParentComponent extends LightningElement {
    records;
    error;
    @wire(getOrders)
    orderRecords({data,error}){
        if(data){
            this.records = data;
            this.error = undefined;
            console.log('records',this.records);
        }
        if(error){
            this.records = undefined;
            this.error = error;
        }
    }
}