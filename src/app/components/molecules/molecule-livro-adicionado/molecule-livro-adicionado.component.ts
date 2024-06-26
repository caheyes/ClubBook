import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Livro {
  id: string;
  nome: string;
  descricao: string;
  usuario_id: string;
  estrelas: number;
}
@Component({
  selector: 'molecule-livro-adicionado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './molecule-livro-adicionado.component.html',
  styleUrl: './molecule-livro-adicionado.component.scss'
})
export class MoleculeLivroAdicionadoComponent {
  @Input() listaLivros: Livro[] = [];
}
