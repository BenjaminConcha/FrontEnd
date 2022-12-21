import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Explab } from '../model/explab';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'https://backend-production-aaf7.up.railway.app/explab/';

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
