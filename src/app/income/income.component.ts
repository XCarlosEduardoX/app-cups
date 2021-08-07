import { Component, OnInit } from '@angular/core';
import {ConnectionService} from './../services/connection.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  public color:any;
  public capacidad:any;
  public modelo:any;
  public material:any;

  constructor(public cnt:ConnectionService) { }

  ngOnInit(): void {
    
  }


  Add(){
  this.cnt.addCup(this.color,this.capacidad,this.modelo,this.material);
  }

 
}
