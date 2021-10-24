import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  statusUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(this.statusUrl);
  }

  criar(status: any) {
    return this.http.post(this.statusUrl, status);
  }
}
