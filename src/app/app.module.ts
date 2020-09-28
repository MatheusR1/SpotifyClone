import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { RodaPeComponent } from './roda-pe/roda-pe.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HelpPageComponent } from './help-page/help-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    RodaPeComponent,
    SideMenuComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide:" LOCALE_ID", useValue: "pt-br" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
