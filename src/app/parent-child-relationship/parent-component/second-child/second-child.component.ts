import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
  
 
  @Input() dataFromParent: any;
  @Input() dataFromsibling:any;
  
  @Output() secondChildToParent:EventEmitter<any> =new EventEmitter();
  @Output() SecondToFirstChildData:EventEmitter<any> =new EventEmitter();

  constructor() { }
  addDataToParent = new FormControl('');
  dataForFirst = new FormControl('');

  ngOnInit(): void {
  }
  
  child2Parent(){
    this.secondChildToParent.emit(this.addDataToParent.value);
    this.addDataToParent.reset();
  }

  firstChild2SecondChild(){
    this.SecondToFirstChildData.emit(this.dataForFirst.value);
    this.dataForFirst.reset();

  }

}
