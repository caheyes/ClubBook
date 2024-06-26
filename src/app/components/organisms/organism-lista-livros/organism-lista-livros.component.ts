import { Component } from '@angular/core';
import { MoleculeAdicionarLivroComponent } from '../../molecules/molecule-adicionar-livro/molecule-adicionar-livro.component';
import { MoleculeLivroAdicionadoComponent } from '../../molecules/molecule-livro-adicionado/molecule-livro-adicionado.component';

@Component({
  selector: 'app-organism-lista-livros',
  standalone: true,
  imports: [MoleculeAdicionarLivroComponent, MoleculeLivroAdicionadoComponent],
  templateUrl: './organism-lista-livros.component.html',
  styleUrl: './organism-lista-livros.component.scss'
})
export class OrganismListaLivrosComponent {

}
