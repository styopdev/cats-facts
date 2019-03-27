import { Routes } from '@angular/router';
import { FactComponent } from './fact/fact.component';
import { FactListComponent } from './fact-list/fact-list.component';

export const routes: Routes = [
  {
    path: 'facts',
    component: FactListComponent
  },
  {
    path: 'fact/:id',
    component: FactComponent
  },
  {
    path: '',
    redirectTo: 'facts',
    pathMatch: 'full'
  }
];
