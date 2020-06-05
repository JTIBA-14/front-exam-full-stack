import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../Location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly headers: HttpHeaders;
  private params: HttpParams;

  constructor( private http: HttpClient ) {
      this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=UTF-8')
  }

  // show locations
  public listLocation (): Observable<Location[]> {
    return this.http.get<Location[]>( `${environment.URL}location/listarTodos`, { headers: this.headers });
  }

  // show location for id
  public listId ( id: number ): Observable<Location> {
    return this.http.get<Location>( `${environment.URL}location/listar/${id}` , { headers: this.headers });
  }

  // Save locatio or update
  public guardar( datos: Location, id ) {
    if ( !id ) {
        return this.http.post(`${environment.URL}location/registrar`, JSON.stringify(datos), {headers: this.headers});
    } else {
        return this.http.put(`${environment.URL}location/actualizar`, JSON.stringify(datos), {headers: this.headers});
    }
}


}
