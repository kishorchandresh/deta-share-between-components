import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DifferentComponentDataSharingModule } from './different-component-data-sharing/different-component-data-sharing.module';
import { ParentChildRelationshipModule } from './parent-child-relationship/parent-child-relationship.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ParentChildRelationshipModule,
    DifferentComponentDataSharingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
