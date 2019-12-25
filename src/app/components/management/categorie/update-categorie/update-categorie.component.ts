import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  submitted:boolean=false;
  id:number;
  categorie;

  constructor(private categorieService:CategorieService,private route:ActivatedRoute,private router:Router,private toastr:ToastrService) { }

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
      data => {
        console.log(data);
        this.toastr.success("La catégorie est mise à jour!");
      }, 
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      });
      this.router.navigate(['/management']);
  }

}
