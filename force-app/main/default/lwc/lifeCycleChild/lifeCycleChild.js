import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    connectedCallback(){
        console.log('Child ConnectedCallback');
    }
    disconnectedCallback(){
        console.log('Child disconnectedCallback');
    }
    /*
    render(){
        console.log('Child render');
    }
    */
    renderedCallback(){
        console.log('Child renderedCallback');
    }
}