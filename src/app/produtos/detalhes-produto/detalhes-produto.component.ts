import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  produto : IProduto | undefined;
  quantidade = 1;
  constructor(private produtosService : ProdutosService,
   private route: ActivatedRoute, private notificacaoService : NotificacaoService ,
   private carrinhoService : CarrinhoService){

  }
  ngOnInit(): void {
    const routParams = this.route.snapshot.paramMap;
    const productId = Number(routParams.get("id"));
    console.log(productId)
    this.produto = this.produtosService.getOne(productId);
    console.log( this.produto )
  }

  adicionarAoCarrinho (){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produtoCar : IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produtoCar);
  }

}
