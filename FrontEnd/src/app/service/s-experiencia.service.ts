import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Explab } from '../model/explab';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'https://bkdbcs.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Explab[]>{
      return this.httpClient.get<Explab[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Explab>{
    return this.httpClient.get<Explab>(this.expURL + `detail/${id}`);
  }

  public save(explab: Explab): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', explab);
  }

  public update(id: number, explab: Explab): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, explab);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

}
