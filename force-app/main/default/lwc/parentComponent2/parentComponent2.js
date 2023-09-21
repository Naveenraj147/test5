import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import LightningConfirm from 'lightning/confirm';
import { deleteRecord, getRecordNotifyChange } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class ParentComponent extends NavigationMixin(LightningElement) {
    @track records;
    Count;
    error;
    wireResponse;

    @wire(getAccounts)
    accountRecords(response) {
        this.wireResponse = response;

        if (response.data) {
            console.log('Executed');
            this.records = this.wireResponse.data;
            this.error = undefined;
            console.log('records', this.records);
            console.log('Count', this.records.length);
            this.Count = 'Account (' + this.records.length + ')';
        }
        if (response.error) {
            this.records = undefined;
            this.error = this.wireResponse.error;
        }
    }

    async handleDelete(event) {
        const result = await LightningConfirm.open({
            message: 'Are you Delete?',
            variant: 'headerless',
            label: 'this is the aria-label value',
            // setting theme would have no effect
        });
        //result is true if OK was clicked
        //and false if cancel was clicked
        console.log('Result: ' + result);

        //Confirm has been closed


        if (result) {
            console.log('Before Refresh')
            deleteRecord(event.detail)
           
            .then(() => {
                getRecordNotifyChange([{ recordId: event.detail }]);

            const evt = new ShowToastEvent({

                title: 'Record Deleted',

                message: 'record deleted successfully',

                variant: 'success'

            })
            this.dispatchEvent(evt);

            refreshApex(this.wireResponse);
            console.log('After Refresh');
            }).catch((err) => {
                console.log(err)
            });



            



        }


        console.log('Parent Reached')
        console.log('event', event)
        console.log('Parent del Id-->', event.detail);
    }
}