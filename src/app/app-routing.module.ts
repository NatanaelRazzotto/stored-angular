import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoencontradoComponent } from './naoencontrado/naoencontrado.component';

const routes : Routes = [{ path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
{   path:"", redirectTo: "produtos", pathMatch: "full"},
{ path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
{   path:"**", component:NaoencontradoComponent}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
