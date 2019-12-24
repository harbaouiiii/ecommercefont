import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url="http://localhost:8080/rest/api/";

  constructor(private http:HttpClient) { }

  allCategorie():Observable<any>{
    return this.http.get(this.url+"allCategorie");
  }

  addCategorie(categorie:Object):Observable<Object>{
    return this.http.post(this.url+"addCategorie",categorie);
  }

  getCategorie(id:number):Observable<any>{
    return this.http.get(this.url+"categorie/"+id);
  }

  updateCategorie(id:number,categorie:Object):Observable<Object>{
    return this.http.put(this.url+"categorie/"+id,categorie);
  }

  deleteCategorie(id:number):Observable<any>{
    return this.http.delete(this.url+"categorie/"+id);
  }

}
