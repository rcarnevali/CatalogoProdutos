import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [  
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'categoria/:categoria',
    renderMode: RenderMode.Server,
  },
  {
    path: 'produto/:id',
    renderMode: RenderMode.Server,
  },
];
