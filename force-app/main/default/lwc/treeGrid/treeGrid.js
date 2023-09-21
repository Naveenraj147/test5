import { LightningElement } from 'lwc';

export default class TreeGrid extends LightningElement {

    columns = [
        {
          type: "text",
          fieldName: "Name",
          label: "Name"
        },
        {
          type: "text",
          fieldName: "Rating",
          label: "Rating"
        }]

        gridData =[
            {
            Name:'Naveen',
            Rating:'Hot',
            _children:[{Name:'Naveen2',Rating:'Hot',_children:[{Name:'Naveen2',Rating:'Hot'},{Name:'Dinesh2',Rating:'Hot'},{Name:'Shankara2',Rating:'Hot'}]},{Name:'Dinesh2',Rating:'Hot'},{Name:'Shankara2',Rating:'Hot'}]
        },
            {
                Name:'Dinesh',
            Rating:'Hot'
        },
            {Name:'Shankara',
            Rating:'Hot'}]
        
            connectedCallback(){
                console.log('Array  Data-->',this.gridData);
            }

        //gridChild = [{Name:'Naveen2',Rating:'Hot'},{Name:'Dinesh2',Rating:'Hot'},{Name:'Shankara2',Rating:'Hot'}]

}