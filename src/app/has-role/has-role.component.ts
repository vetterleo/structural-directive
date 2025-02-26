import { Component } from '@angular/core';
import { HasRoleDirective } from './has-role.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

export type Role = 'ADMIN' | 'MANAGER' | 'WRITER' | 'READER' | 'CLIENT';

export interface User {
  name: string;
  isAdmin: boolean;
  roles: Role[];
}

@Component({
  selector: 'app-has-role',
  standalone: true,
  imports: [ HasRoleDirective, MatCheckboxModule, FormsModule ],
  templateUrl: './has-role.component.html',
  styleUrl: './has-role.component.scss'
})
export class HasRoleComponent {

  user: User = {
    name: 'Léo',
    isAdmin: false,
    roles: []
  };

  setAdmin(isChecked: boolean) {

    this.user = {
      name: this.user.name,
      isAdmin: isChecked,
      roles: this.user.roles
    }
  }
}
