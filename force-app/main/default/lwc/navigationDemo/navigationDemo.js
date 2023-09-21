import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationDemo extends NavigationMixin(LightningElement) {
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            },
        });
    }
    handleClick2(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
       attributes: {
           recordId: '0015g00000syQ5iAAE',
           objectApiName: 'Account',
           actionName: 'view'
            }
        });
    }
    }
