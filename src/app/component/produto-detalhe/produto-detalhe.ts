import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListaService } from '../../service/lista.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe {

produto: any = null;

  constructor(
    private route: ActivatedRoute,
    private listaService: ListaService
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
