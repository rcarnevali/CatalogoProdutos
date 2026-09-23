import { Routes } from '@angular/router';
import { ProdutoLista } from './component/produto-lista/produto-lista';
import { ProdutoDetalhe } from './component/produto-detalhe/produto-detalhe';

export const routes: Routes = [
  { path: '', component: ProdutoLista },
  { path: 'produto/:id', component: ProdutoDetalhe },
];