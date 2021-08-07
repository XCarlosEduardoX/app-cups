import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  loginForm = new FormGroup({

    user: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(8)
    ]),


    pass: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
  })



  constructor(private router:Router) { }

  ngOnInit(): void {
  }




  get user() { return this.loginForm.get('user') }
  get pass() { return this.loginForm.get('pass') }


  Login() {

    if (this.loginForm.valid) {
      this.router.navigate(['/income']);
      

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Ingresa primero los datos por favor',
        position: 'center',

      })
      
    


    }

  }









}