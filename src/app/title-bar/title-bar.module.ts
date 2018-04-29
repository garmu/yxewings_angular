import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [TitleBarComponent],
  exports: [
    TitleBarComponent
  ]
})
export class TitleBarModule { }
