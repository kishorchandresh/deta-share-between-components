import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './different-component-data-sharing/first-component/first-component.component';
import { SecondComponentComponent } from './different-component-data-sharing/second-component/second-component.component';
import { ParentComponentComponent } from './parent-child-relationship/parent-component/parent-component.component';

const routes: Routes = [

  {path:"",redirectTo: "/parent-child-relationship", pathMatch: 'full'},
  {path:"parent-child-relationship",component: ParentComponentComponent},
  {path:"not-related-components-first-component",component: FirstComponentComponent},
  {path:"not-related-components-second-component",component: SecondComponentComponent},
  {path:"**",redirectTo: "/parent-child-relationship", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
