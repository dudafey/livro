import { HttpClient } from '@angular/common/http';
import { Livro } from '../models/Livro';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  listar(): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.baseURL}livro/listar/`);
  }

  cadastrar(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(`${this.baseURL}livro/cadastrar`, livro);
  }

}