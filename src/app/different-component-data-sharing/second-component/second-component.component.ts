import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit,OnDestroy {
  message:any =[];
  subscription!: Subscription;
  constructor(private data: SharedDataService,private route:Router) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(
      (message:any) => 
      this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
  newMessage() {
    this.data.changeMessage("Data From Second Component");
    this.route.navigate(["/not-related-components-first-component"])

  }

}
