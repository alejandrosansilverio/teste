import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatFormField, MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroVinhosComponent } from './cadastro-vinhos/cadastro-vinhos.component';

@NgModule({
  imports: [
    CommonModule,
    AppModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    LoginComponent,
    CadastroComponent,
    CadastroVinhosComponent
  ],
  bootstrap: [AppComponent]
})
export class ModalModule { }
