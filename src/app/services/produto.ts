import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  buscarSugestoes() {
    return this.http.get<any[]>(`https://fakestoreapi.com/products`);
  }

  buscarProdutoPorId(id: number) {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }

  buscarCategorias() {
    return this.http.get<string[]>(`https://fakestoreapi.com/products/categories`);
  }

  buscarProdutosPorCategoria(categoria: string) {
    return this.http.get<any[]>(
      `https://fakestoreapi.com/products/category/${encodeURIComponent(categoria)}`
    );
  }
}