import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  public url="http://localhost:8080/rest/api/";

  constructor(private http:HttpClient) { }

  allProduit():Observable<any>{
    return this.http.get(this.url+"allProduit");
  }

  getProduit(id:number):Observable<any>{
    return this.http.get(this.url+"produit/"+id);
  }

  addProduit(produit:Object):Observable<Object>{
    return this.http.post(this.url+"addProduit",produit);
  }

  updateProduit(id:number,produit:Object):Observable<Object>{
    return this.http.put(this.url+"produit/"+id,produit);
  }

  deleteProduit(id:number):Observable<any>{
    return this.http.delete(this.url+"produit/"+id);
  }
}
