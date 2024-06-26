import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'livros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit { // Implementando 
  //variaveis
  listaLivros: {id: string, nome: string, descricao: string, usuario_id: string, estrelas: number}[] = []

  constructor(private livrosService: LivrosService) {}
  
  //OnInit
  ngOnInit(): void {
    this.getLivros();
  }

  getLivros() {
    this.livrosService.getLivros().subscribe((data: any) => {
      this.listaLivros = data;
    });
  }
}