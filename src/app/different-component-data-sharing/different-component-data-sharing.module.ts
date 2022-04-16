import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from './shared-data.service';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';



@NgModule({
  declarations: [
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [SharedDataService],

})
export class DifferentComponentDataSharingModule { }
