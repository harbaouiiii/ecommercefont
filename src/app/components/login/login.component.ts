import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    let loginFormControls = {
      email:new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
      ]),
    }
    this.loginForm=formBuilder.group(loginFormControls);
  }

  ngOnInit() {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }


  login(){
    console.log(this.loginForm.value);
    
  }
}
