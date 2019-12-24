import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie-model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  submitted:boolean=false;
  id:number;
  categorie:Categorie;

  constructor(private categorieService:CategorieService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.id=this.route.snapshot.params['id'];
    this.categorieService.getCategorie(this.id).subscribe(
      data=>this.categorie=data,error=>console.log(error)
    );
  }

  onSubmit(){
    this.submitted=true;
    this.categorieService.updateCategorie(this.id,this.categorie).subscribe(
      data=>console.log(data),error=>console.log(error)
    );
    this.router.navigate(['/management']);
  }

}
