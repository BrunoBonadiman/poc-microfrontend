import { Routes } from '@angular/router';
import { InicialPageComponent } from './pages/inicial-page/inicial-page.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: InicialPageComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
