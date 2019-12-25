import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit-model';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  
  categories:Categorie[];
  id:number;
  produit:Produit;
  submitted:boolean=false;

  constructor(private serviceCat:CategorieService,private service:ProduitService,private route:ActivatedRoute, private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.serviceCat.allCategorie().subscribe(
      res=>this.categories=res
    );
    this.id=this.route.snapshot.params['id'];
    this.service.getProduit(this.id).subscribe(
      data=>this.produit=data,error=>console.log(error)
    );
  }

  onSubmit(){
    this.submitted=true;
    this.service.updateProduit(this.id,this.produit).subscribe(
      data=>{
        console.log(data);
        this.toastr.success('Le produit est modifié avec succés');
      }
      ,
      error=>{
        console.log(error);
        this.toastr.error('Erreur');
      }
    );
    this.router.navigate(['/management']);
  }


}
