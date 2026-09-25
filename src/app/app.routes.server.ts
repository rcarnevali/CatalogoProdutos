import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [  
  {
    path: 'categoria/:categoria',
    renderMode: RenderMode.Server,
  },
  {
    path: 'produto/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
