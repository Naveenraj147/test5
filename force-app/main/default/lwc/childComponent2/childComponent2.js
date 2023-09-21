import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api record;
    @api iconname;

    handleClick(event){
        console.log(event);
        if(event.target.name == 'Edit'){
            const recId = event.target.dataset.recid;
            alert(event.target.dataset.recid)
        }
        if(event.target.name == 'Delete'){
            alert(event.target.dataset.recid)
            const recId = event.target.dataset.recid;
            const delEvent = new CustomEvent(
                'childdel',{
                
                detail:recId
            });
            this.dispatchEvent(delEvent);
        }
    }
}