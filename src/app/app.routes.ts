import { Routes } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { HasRoleComponent } from './has-role/has-role.component';

export const routes: Routes = [
  {
    path: 'select-directive',
    component: SelectComponent

  },
  {
    path: 'has-role-directive',
    component: HasRoleComponent

  },
];
