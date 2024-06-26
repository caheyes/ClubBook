import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculeAdicionarLivroComponent } from '../../molecules/molecule-adicionar-livro/molecule-adicionar-livro.component';
import { MoleculeLivroAdicionadoComponent } from '../../molecules/molecule-livro-adicionado/molecule-livro-adicionado.component';
import { LivrosService } from '../../../services/livros.service';

interface Livro {
  id: string;
  nome: string;
  descricao: string;
  usuario_id: string;
  estrelas: number;
}

@Component({
  selector: 'app-organism-lista-livros',
  standalone: true,
  imports: [CommonModule, MoleculeAdicionarLivroComponent, MoleculeLivroAdicionadoComponent],
  templateUrl: './organism-lista-livros.component.html',
  styleUrl: './organism-lista-livros.component.scss'
})
export class OrganismListaLivrosComponent implements OnInit {
  //variaveis
  listaLivros: Livro[] = [];

  constructor(private livrosService: LivrosService) {}
  
  //OnInit
  ngOnInit(): void {
    this.getLivros();
  };

  getLivros() {
    this.livrosService.getLivros().subscribe((data: any) => {
      this.listaLivros = data;
    });
  }
}
