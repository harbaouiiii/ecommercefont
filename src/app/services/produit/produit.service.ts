import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  public url="http://localhost:8080/rest/api/";

  constructor(private http:HttpClient) { }

  allProduit(){
    return this.http.get(this.url+"allProduit");
  }

  getProduit(id:number){
    return this.http.get(this.url+"produit/"+id);
  }

  addProduit(produit:Object){
    return this.http.post(this.url+"addProduit",produit);
  }

  updateProduit(id:number,produit:Object){
    return this.http.put(this.url+"produit/"+id,produit);
  }

  deleteProduit(id:number){
    return this.http.delete(this.url+"produit/"+id);
  }
}
