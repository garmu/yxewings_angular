import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleBarModule } from './title-bar/index';
import { RestaurantsModule } from './restaurants/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TitleBarModule,
    RestaurantsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
