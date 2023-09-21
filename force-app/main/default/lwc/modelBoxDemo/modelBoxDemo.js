import { LightningElement } from 'lwc';

export default class ModelBoxDemo extends LightningElement {
    
    isModalOpen = false;
    openModal(){
        this.isModalOpen = true;
    }
    closeModal(){
        this.isModalOpen = false;
    }
}