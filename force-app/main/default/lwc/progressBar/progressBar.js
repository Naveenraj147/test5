import { LightningElement, api} from 'lwc';

export default class ProgressBar extends LightningElement {
    @api currentstep;
    @api stepvalues =[];
   
}