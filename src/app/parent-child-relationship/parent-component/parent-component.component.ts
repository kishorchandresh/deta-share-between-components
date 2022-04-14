import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  parentToFirstChild  : any = {"name":"First Child"};
  parentToSecondChild : any = {"name":"Second Child"};

  firstChildName = new FormControl('');
  secondChildName = new FormControl('');

  // secondToFirstChild  : any = {};
  // firstToSecondChild  : any = {};

  firstChildToParentData  : any  = [];
  firstToSecondChildData  : any  = {};
  secondChildToParenData  : any  = [];
  secondToFirstChildData  : any  = {};

  constructor() { }

  ngOnInit(): void {
  }

  changeFirstChildData(){
    this.parentToFirstChild['name']=this.firstChildName.value;
    this.firstChildName.reset();
  }
  changeSecondChildData(){
    this.parentToSecondChild['name']=this.secondChildName.value;
    this.secondChildName.reset();

  }

  firstChildToParent(data:any){
    console.log(data);
    this.firstChildToParentData.push(data);
  };

  firstToSecondChild(data:any){
    this.firstToSecondChildData['data']=data;
  };
  
  secondChildToParent(data:any){
    console.log(data);
    this.secondChildToParenData.push(data);
  };
  
  SecondToFirstChild(data:any){
    this.secondToFirstChildData['data']=data;

  };



}
