import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  }
];
