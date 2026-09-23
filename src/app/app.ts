import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoLista } from './component/produto-lista/produto-lista';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProdutoLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'catalogo-produtos';
}