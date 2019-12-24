import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/models/produit-model';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  submitted:boolean = false;
  produit:Produit=new Produit();
  categories:Observable<Categorie[]>;

  constructor(private categorieService:CategorieService ,private service:ProduitService,private router:Router) { }

  ngOnInit() {
    this.categorieService.allCategorie().subscribe(
      (res)=>this.categories=res
    )
  }

  onSubmit(){
  
    this.submitted=true;
    this.service.addProduit(this.produit).subscribe
    (data=>console.log(data),error=>console.log(error));
    this.router.navigate(['/management']);
  
  }


}
