import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponentComponent } from './parent-child-relationship/parent-component/parent-component.component';

const routes: Routes = [

  {path:"",redirectTo: "/parent-child-relationship", pathMatch: 'full'},
  {path:"parent-child-relationship",component: ParentComponentComponent},
  {path:"view-child ",component: ParentComponentComponent},
  {path:"not-related-components",component: ParentComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
