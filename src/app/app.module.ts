import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClockcalendarComponent } from './clockcalendar/clockcalendar.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockcalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
