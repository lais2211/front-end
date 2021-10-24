import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Resposta} from "./Resposta";
import {GetByDataResposta} from "./GetByDataResposta";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  statusUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  atualStatus(): Observable<Resposta []> {
    return this.http.get<Resposta[]>(this.statusUrl+'/statusAtual');
  }

  pegarEstado(estado: string): Observable<Resposta[]>{
    return this.http.get<Resposta[]>(this.statusUrl+'/statusAtualEstado/'+ estado);
  }

  pegarData(data: GetByDataResposta): Observable<Resposta[]>{
    return this.http.post<Resposta[]>(this.statusUrl+'/data/',data);
  }

  pegarInstabilidade(): Observable<Resposta>{
    return this.http.get<Resposta>(this.statusUrl+'/instabilidade/');
  }

}
