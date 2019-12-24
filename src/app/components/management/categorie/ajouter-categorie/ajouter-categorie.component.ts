import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  addCategorieLogin:FormGroup;
  categorie:Categorie=new Categorie();
  submitted=false;

  constructor(private service:CategorieService, private router:Router,private formBuilder:FormBuilder) {
      
   }

  ngOnInit() {
  }

  ajouter(){
    this.service.addCategorie(this.categorie).
      subscribe(data => console.log(data), error => console.log(error));
    this.categorie=new Categorie();
    this.router.navigate(['/management']);
  }

  onSubmit(){
    this.submitted=true;
    this.ajouter();
  }

}
