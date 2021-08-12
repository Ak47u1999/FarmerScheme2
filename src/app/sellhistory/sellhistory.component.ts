import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import {Farmersoldhistory } from 'src/models/FarmersoldHistory';

@Component({
  selector: 'app-sellhistory',
  templateUrl: './sellhistory.component.html',
  styleUrls: ['./sellhistory.component.css']
})
export class SellhistoryComponent implements OnInit {
  soldhistory:Farmersoldhistory[]=[];
  constructor(public service :CrudService) { }

  ngOnInit(): void {
    this.service.fetchsoldhistory().subscribe((data: Farmersoldhistory[])=>{
      console.log(data)
      this.soldhistory = data;}); 
  }

}
