import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly headers: HttpHeaders;
  private params: HttpParams;

  constructor( private http: HttpClient ) {
      this.headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }


  public listLocation (): Observable<any> {
    return this.http.get<any>( `${environment.URL}location/listarTodos`, { headers: this.headers });
  }

  public listId ( id: number ): Observable<any> {
    return this.http.get<any>( `${environment.URL}location/listar/${id}` , { headers: this.headers });
  }


}
