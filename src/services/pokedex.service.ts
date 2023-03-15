import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }
  Url=environment.baseUrl
  verPokemones():Observable<any>{
   return this.http.get(this.Url+'/pokemon?offset=0&limit=151')
  }
  
pokeDato( Url2: any):Observable<any>{
  return this.http.get(Url2);
}

}
