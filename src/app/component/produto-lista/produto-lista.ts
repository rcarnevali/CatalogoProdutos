import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './produto-lista.html',
  styleUrl: './produto-lista.css'
})
export class ProdutoLista implements OnInit {
  constructor(
    public listaService: ProdutoService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  sugestoes: any[] = [];
  categoriaAtual: string | null = null;
  categoriaNomeExibicao: string = 'Sugestões de Produtos';
  carregandoProdutos: boolean = false;

  nomesCategorias: Record<string, string> = {
    'electronics': 'Eletrônicos',
    'jewelery': 'Joalheria',
    "men's clothing": 'Moda Masculina',
    "women's clothing": 'Moda Feminina'
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoria = params.get('categoria');
      this.categoriaAtual = categoria;
      this.carregarProdutos(categoria);
    });
  }

  carregarProdutos(categoria: string | null): void {
    this.carregandoProdutos = true;
    this.sugestoes = [];

    if (categoria) {
      this.categoriaNomeExibicao = `Categoria: ${this.nomesCategorias[categoria] || categoria}`;
      this.listaService.buscarProdutosPorCategoria(categoria).subscribe({

      next: (data) => {
        this.sugestoes = data;
        this.carregandoProdutos = false;
        this.cdr.markForCheck();
      },
        error: (error) => {
          console.error('Erro ao buscar produtos da categoria:', error);
          this.carregandoProdutos = false;
          this.cdr.markForCheck();
        }
      });
    } else {
      this.categoriaNomeExibicao = 'Todos os produtos';
      this.listaService.buscarSugestoes().subscribe({
        next: (data) => {
          this.sugestoes = data;
          this.carregandoProdutos = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Deu ruim:', error);
          this.carregandoProdutos = false;
          this.cdr.markForCheck();
        }
      });
    }
  }
}