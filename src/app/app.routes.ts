import { Routes } from '@angular/router';
import { ProdutoListaComponent } from './component/produto-lista/produto-lista.component';
import { ProdutoDetalheComponent } from './component/produto-detalhe/ProdutoDetalheComponent';

export const routes: Routes = [
  {path: '', component: ProdutoListaComponent},
  {path: 'item/:id', component: ProdutoDetalheComponent},
];