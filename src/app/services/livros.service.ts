import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //lida com operações assincronas, para obter resposta

//componentes serviço, faz que fique disponivel para toda a aplicaçao
@Injectable({providedIn: 'root'})

export class LivrosService {
  private apiUrl = 'http://localhost:3000/livros';

  //injetando instancia
  constructor(private http: HttpClient) {}

  getLivros(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postLivro(livro: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, livro);
  }

  deleteLivro(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateLivro(id: string, livro: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, livro);
  }
}