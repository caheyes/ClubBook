import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'molecule-header',
  standalone: true,
  imports: [ RouterLinkActive, RouterLink ],
  templateUrl: './molecule-header.component.html',
  styleUrl: './molecule-header.component.scss'
})
export class MoleculeHeaderComponent {

}
