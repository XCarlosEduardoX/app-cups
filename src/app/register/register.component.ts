import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  registerForm =  new FormGroup({
userName: new FormControl('',[
  Validators.required,
  Validators.minLength(4)
]),

email: new FormControl('',[
  Validators.required,
  Validators.minLength(8)
]),

pass: new FormControl('',[
  Validators.required,
  Validators.minLength(8)
])


  })

  ngOnInit(): void {
  }


  register(){

    if(this.registerForm.valid){
      this.router.navigate(['/income']);

    }

    else{
    Swal.fire({
      icon:'error',
      title:'Error! Ingresa los datos por favor'
    })
    }
  }



  get userName(){return this.registerForm.get('userName')}

  get email(){return this.registerForm.get('email')}
  
  get pass(){return this.registerForm.get('pass')}

}
