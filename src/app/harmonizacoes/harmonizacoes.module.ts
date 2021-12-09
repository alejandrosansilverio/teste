import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HarmonizacoesComponent } from './harmonizacoes/harmonizacoes.component';
import { UvasComponent } from './uvas/uvas.component';



@NgModule({
  declarations: [
    HarmonizacoesComponent,
    UvasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HarmonizacoesModule { }
