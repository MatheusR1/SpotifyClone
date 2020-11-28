import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from "./page-home/page-home.component"
import { HelpPageComponent } from "./help-page/help-page.component"
import { PlayListsComponent } from './play-lists/play-lists.component';
import { LoginComponent } from './login/login.component';
import { MusicPlayComponent } from './music-play/music-play.component';

const routes: Routes = [
  { path: "", component: PageHomeComponent },
  { path: "home", component: PageHomeComponent },
  { path: "help", component: HelpPageComponent },
  { path: "playlist", component: PlayListsComponent },
  { path: "login", component: LoginComponent },
  {path: "musicplay", component:MusicPlayComponent},
  {path: "musicplay/:id", component:MusicPlayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
