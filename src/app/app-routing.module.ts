import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

let routes: Routes = [
  {path:'', component:MainLayoutComponent, children: [
      {path: 'episodes', loadChildren:()=> import('./modules/episodes/episodes.module').then(value => value.EpisodesModule)}
    ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
