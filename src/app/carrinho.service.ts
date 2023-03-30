import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens : IProdutoCarrinho [] = [];
  
  constructor() { }

  obterCarrinho(){
    const carrinho = JSON.parse(localStorage.getItem("carrinho") || "");
    return carrinho; 
  }

  adicionarAoCarrinho(produto : IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }
  limparcarrinho(){
    this.itens = [];
    localStorage.clear(); 
  }
}
