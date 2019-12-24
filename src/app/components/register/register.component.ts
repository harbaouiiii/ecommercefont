import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    let registerFormControls = {
      name:new FormControl('',[
        Validators.minLength(3),
        Validators.required,
      ]),
      username:new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-z][a-zA-z]+')
      ]),
      email:new FormControl('',[
        Validators.email,
        Validators.required,
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[a-zA-z0-9]+'),
      ]), 
      //role:new FormControl()
    };
    this.registerForm=formBuilder.group(registerFormControls);
  }

  ngOnInit() {
  }

  get name(){
    return this.registerForm.get('name');
  }

  get username(){
    return this.registerForm.get('username');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  /*get role(){
    return this.registerForm.get('role');
  }*/

  register(){
    console.log(this.registerForm.value);
  }

}
