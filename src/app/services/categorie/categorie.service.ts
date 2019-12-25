import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url="http://localhost:8080/rest/api/";

  constructor(private http:HttpClient) { }

  allCategorie(){
    return this.http.get(this.url+"allCategorie");
  }

  addCategorie(categorie:Object){
    return this.http.post(this.url+"addCategorie",categorie);
  }

  getCategorie(id:number){
    return this.http.get(this.url+"categorie/"+id);
  }

  updateCategorie(id:number,categorie:Object){
    return this.http.put(this.url+"categorie/"+id,categorie);
  }

  deleteCategorie(id:number){
    return this.http.delete(this.url+"categorie/"+id);
  }

}
