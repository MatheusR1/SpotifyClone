import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from "./page-home/page-home.component"
import { HelpPageComponent } from "./help-page/help-page.component"
import { PlayListsComponent } from './play-lists/play-lists.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: PageHomeComponent },
  { path: "home", component: PageHomeComponent },
  { path: "help", component: HelpPageComponent },
  { path: "playlist", component: PlayListsComponent },
  { path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
