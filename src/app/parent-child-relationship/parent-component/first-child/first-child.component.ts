import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  @Input() dataFromParent: any;
  @Input() dataFromsibling:any;
  
  @Output() firstChildToParent:EventEmitter<any> =new EventEmitter();
  @Output() firstToSecondChildData:EventEmitter<any> =new EventEmitter();

  constructor() { }

  addDataToParent = new FormControl('');
  dataForSecond = new FormControl('');
  
  ngOnInit(): void {
  }

  child2Parent(){
    this.firstChildToParent.emit(this.addDataToParent.value);
    this.addDataToParent.reset();
  }

  firstChild2SecondChild(){
    this.firstToSecondChildData.emit(this.dataForSecond.value);
    this.dataForSecond.reset();

  }

}
