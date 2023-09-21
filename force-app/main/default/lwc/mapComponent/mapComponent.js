import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/MapController.getAccounts';
export default class MapComponent extends LightningElement {
    @track mapmarkers;
    
    zoomLevel = 2;

    @wire(getAccounts)
    wiredata({data,error}){
        if(data){
            console.log('data',data);
            data.forEach(element => {
                let mapObj ={
                    location: {
                        City: element.ShippingCity,
                        Country: element.ShippingCountry,
                        PostalCode: element.ShippingPostalCode,
                        State: element.ShippingState,
                        Street: element.ShippingStreet,
                    },
                    value: element.Name,
                    title: element.Name,
                    description:element.Description,
                    icon: 'standard:account',
                }
                console.log(mapObj);
                if(!this.mapmarkers){
                    this.mapmarkers = [];
                }
                this.mapmarkers.push(mapObj);
            });
        }
        if(error){
            console.log('error',error);
        }

    }
}