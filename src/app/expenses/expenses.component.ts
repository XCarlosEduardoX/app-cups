import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor() { }

  public cantidadN:any;

  ngOnInit(): void {
  }

  myGroup = new FormGroup({

    cantidad:new FormControl('',[
      Validators.required,
    ])
  })

 

  Shopping(){
  

    if(this.myGroup.valid && this.cantidadN >=10){
      Swal.fire({
        icon:'success',
        title:'Se ha realizado su compra exitosamente',
        text:'Se lleva de regalo 3 tazas de alta calidad'
      })
    }

    else if(this.myGroup.valid && this.cantidadN <=10){
      Swal.fire({
        icon:'success',
        title:'Se ha realizado su compra exitosamente',
        
      })
    }



    else{
      Swal.fire({
        icon:'error',
        title:'Error no has ingresado ninguna cantidad'
      })
    }
  }



get cantidad(){return this.myGroup.get('cantidad')}
}
