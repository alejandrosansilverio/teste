import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarmonizacoesComponent } from './harmonizacoes/harmonizacoes.component';
import { HomeComponent } from './home/home.component';
import { UvasComponent } from './uvas/uvas.component';
import { VinhosComponent } from './vinhos/vinhos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vinhos', component: VinhosComponent},
  {path: 'harmonizacoes', component: HarmonizacoesComponent},
  {path: 'uvas', component: UvasComponent},
  {path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
