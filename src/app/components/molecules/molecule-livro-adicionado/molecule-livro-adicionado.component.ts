import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../../../services/livros.service';
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
  @Output() atualizarLista = new EventEmitter<void>();

  constructor(private livrosService: LivrosService) {}

  //methods
  deletarLivro(id: string){
    this.livrosService.deleteLivro(id).subscribe((data: any) => {
      this.atualizarLista.emit();
    });
  }
}
