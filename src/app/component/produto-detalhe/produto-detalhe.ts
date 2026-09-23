import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-produto-detalhe',
  imports: [CommonModule, RouterLink],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {
  produto: any = null;

  constructor(
    private route: ActivatedRoute,
    private listaService: ProdutoService
  )   {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.listaService.buscarProdutoPorId(Number(id)).subscribe({
        next: (dados) => this.produto = dados,
        error: (erro) => console.error('Deu ruim:', erro),
      });
    }
  }

}