import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho:IProdutoCarrinho[] = []
  total : string;
  constructor(public carrinhoService  :CarrinhoService){
    
  }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal;
  }

  removerProdutodoCarrinho(productId : number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== productId);
    this.carrinhoService.removerProdutodoCarrinho(productId);
  }
  calcularTotal(){
     this.total = this.itensCarrinho.reduce((prev,curr)=>prev + (curr.preco *curr.quantidade),0)
  }
}
