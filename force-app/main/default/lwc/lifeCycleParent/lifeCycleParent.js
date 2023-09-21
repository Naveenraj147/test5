import { LightningElement, wire, api } from 'lwc';
import testWire from '@salesforce/apex/LookupController.testWire';
export default class LifeCycleParent extends LightningElement {
    times =[1,2];
    @api recordId;
    @api teststring;

    @wire(testWire)
    fun({data, error}){
        if(data){
            console.log(data);
            console.log(this.recordId)

        }
        if(error){
            console.log(error);

        }
    }
    constructor(){
        super();
        console.log('constructor')
        console.log(this.recordId)
        console.log(this.teststring)
    }
    connectedCallback(){
        console.log('Parent ConnectedCallback');
        console.log(this.recordId)
    }
    disconnectedCallback(){
        console.log('Parent disconnectedCallback');
        console.log(this.recordId)
    }
   /* render(){
        console.log('Parent render');
    }*/
    renderedCallback(){
        console.log('Parent renderedCallback');
        console.log(this.recordId)
    }

   
}