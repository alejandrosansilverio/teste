import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { ToolbarComponent } from './toolbar.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    MatDialogModule,
    SweetAlert2Module
  ]
})
export class ToolbarModule { }
