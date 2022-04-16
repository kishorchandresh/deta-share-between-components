import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  
  // Input tegs for accept data from user to send data from parent to child 
  firstChildName = new FormControl('');
  secondChildName = new FormControl('');

  // variable for sending Data from Parent to Child
  parentToFirstChild  : any = {"name":"First Child"};
  parentToSecondChild : any = {"name":"Second Child"};


  // variable for sending Data from  Child to Parent
  firstChildToParentData  : any  = [];
  secondChildToParenData  : any  = [];

  // variable for sending Data between siblings
  firstToSecondChildData  : any  = {};
  secondToFirstChildData  : any  = {};

  

  // Start Child AND Parent data shared
  changeFirstChildData(){
    this.parentToFirstChild['name']=this.firstChildName.value;
    this.firstChildName.reset();
  }
  firstChildToParent(data:any){
    console.log(data);
    this.firstChildToParentData.push(data);
  };
  // End Child AND Parent data shared



  //Start Second Child AND Parent data shared
  changeSecondChildData(){
    this.parentToSecondChild['name']=this.secondChildName.value;
    this.secondChildName.reset();

  }
  secondChildToParent(data:any){
    console.log(data);
    this.secondChildToParenData.push(data);
  };
  //End Second Child AND Parent data shared
  

  
  //Start Data Sharing between Siblings
  firstToSecondChild(data:any){
    this.firstToSecondChildData['data']=data;
  };
  SecondToFirstChild(data:any){
    this.secondToFirstChildData['data']=data;
  };
  //End Data Sharing between Siblings




}
