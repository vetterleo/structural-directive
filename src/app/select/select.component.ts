import { Component } from '@angular/core';
import { SelectDirective } from './select.directive';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [ SelectDirective ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

}
