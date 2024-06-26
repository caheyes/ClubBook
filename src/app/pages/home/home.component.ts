import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MoleculeHeaderComponent } from '../../components/molecules/molecule-header/molecule-header.component';
import { LivrosComponent } from '../livros/livros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterOutlet, MoleculeHeaderComponent, LivrosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
