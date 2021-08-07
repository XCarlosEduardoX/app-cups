import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

id:number = 0;
public arrayCups:any = [];
  constructor() {
  
   }



   addCup(color:string,capacidad:string,modelo:string,material:string){
    
    const newCup ={
     id:this.id++,
    color,
    capacidad,
    modelo,
    material
    }

    this.arrayCups.push(newCup)

   }


  
 
}
