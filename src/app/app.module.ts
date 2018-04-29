import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleBarModule } from './title-bar/title-bar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TitleBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
