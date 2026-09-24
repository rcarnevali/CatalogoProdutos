import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  categorias: string[] = [];
  carregando: boolean = true;
  erro: string | null = null;

  // Mapeamento amigável de nomes e ícones para as categorias da API
  categoriaInfo: Record<string, { nome: string; icone: string }> = {
    'electronics': { nome: 'Eletrônicos', icone: '💻' },
    'jewelery': { nome: 'Joalheria', icone: '💍' },
    "men's clothing": { nome: 'Moda Masculina', icone: '👔' },
    "women's clothing": { nome: 'Moda Feminina', icone: '👗' }
  };

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.carregando = true;
    this.produtoService.buscarCategorias().subscribe({
      next: (dados) => {
        this.categorias = dados;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
        this.erro = 'Não foi possível carregar as categorias.';
        this.carregando = false;
      }
    });
  }

  obterNomeExibicao(categoria: string): string {
    return this.categoriaInfo[categoria]?.nome || categoria;
  }

  obterIcone(categoria: string): string {
    return this.categoriaInfo[categoria]?.icone || '🏷️';
  }
}
