import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  searchArray= [];
  num:number = 0;
  num1:number;
  displayInputDes:boolean = false;  
  inputDesValue:string = "";
  listName:string = "";
  inputChangesValue:string = "";
  dispalyEditedValue:boolean = false;
  tableData = [
    {
      date:"Jan 21",
      listName:"Compeitive Intelligence",
      noOfEntities:0,
      details:["Bundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    },
    {
      date:"Jan 28",
      listName:"My Vendors",
      noOfEntities:23,
      details:[]
    },
    {
      date:"Feb 16",
      listName:"My Customers",
      noOfEntities:100,
      details:["Aundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    },
    {
      date:"Feb 26",
      listName:"Test_30_results",
      noOfEntities:70,
      details:["Cundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    },
    {
      date:"Jan 31",
      listName:"To_index",
      noOfEntities:60,
      details:["RRLBundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    },
    {
      date:"March 11",
      listName:"KPMG Requested Companies - Listed Set_Prasada Kumar",
      noOfEntities:28,
      details:["LLkBundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    },
    {
      date:"April 20",
      listName:"Error Case-Ltd To EBITDA Blank_Prasada Kumar",
      noOfEntities:60,
      details:["IIBundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    },
    {
      date:"Feb 16",
      listName:"Two Companies",
      noOfEntities:50,
      details:["OOOBundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    },
    {
      date:"Jan 21",
      listName:"Custom",
      noOfEntities:33,
      details:["YYBundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    },
    {
      date:"Jan 28",
      listName:"Mumbai",
      noOfEntities:73,
      details:["ZZBundl Technologies Private Limited(Swiggy)","Hector Beverages Private Limited", "Dewan Housing Finance Corporation Ltd."]
    }
  ]


  constructor() {
    this.searchArray = this.tableData
   }

  ngOnInit(): void {
  }

  handleDisplayDetails(i){
    this.num = i
  }

  handleAddDetails(i){
    if(i==this.num &&  this.inputDesValue !== "" && this.inputDesValue.length > 0 ){
      this.tableData[i].details.push(this.inputDesValue)
      this.inputDesValue = "";
      this.displayInputDes = false
    }
  }

  handleInput(event){
    this.inputDesValue = event.target.value;
  }

  handleDisplayDesc(){
    this.displayInputDes = true
  }


  handleSearchListName(event){
    let filterValue = event.target.value;
    this.searchArray  = this.tableData
    if(filterValue && filterValue.trim() != " ")
  {  
   this.searchArray =  this.searchArray.filter(option =>
      option.listName.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
    }
  }

  handleDelete(index){
    this.searchArray.splice(index, 1);
  }

  hanldeInputChanges(event){
    this.inputChangesValue = event.target.value
  }

  handleEditDisplay(i){
    this.num1 = i
  }

  handleUpdateName(i){
      this.searchArray[i].listName = this.inputChangesValue;
      this.num1 = undefined;
  }

}
