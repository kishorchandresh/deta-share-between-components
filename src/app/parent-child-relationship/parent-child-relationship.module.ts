import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { FirstChildComponent } from './parent-component/first-child/first-child.component';
import { SecondChildComponent } from './parent-component/second-child/second-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ParentComponentComponent,
    FirstChildComponent,
    SecondChildComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParentChildRelationshipModule { }
