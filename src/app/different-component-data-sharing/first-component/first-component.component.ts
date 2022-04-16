import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit,OnDestroy  {

  message:any =[] ;
  subscription!: Subscription;
  constructor(private data: SharedDataService,private route:Router) { }
  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(
      (message:any) => this.message = message)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  newMessage() {
    this.data.changeMessage("Data From First Component");
    this.route.navigate(["/not-related-components-second-component"])
  }
}
