import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MoleculeHeaderComponent } from '../../components/molecules/molecule-header/molecule-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterOutlet, MoleculeHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
