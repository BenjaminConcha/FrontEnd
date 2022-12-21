import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'https://backend-production-aaf7.up.railway.app/proy/';
  constructor(private httpClient: HttpClient) { }

public lista(): Observable<proyecto[]>{
    return this.httpClient.get<proyecto[]>(this.URL + 'lista');
}

public detail(id: number): Observable<proyecto>{
  return this.httpClient.get<proyecto>(this.URL + `detail/${id}`);
}


public save(proy: proyecto): Observable<any>{
  return this.httpClient.post<any>(this.URL + 'create', proy);
}

public update(id: number, proy: proyecto): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, proy);
}

public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}
}
