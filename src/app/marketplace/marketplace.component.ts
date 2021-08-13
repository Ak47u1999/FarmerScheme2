import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketplaceCrops } from 'src/models/MarketplaceCrops';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  
  viewmarketplace:MarketplaceCrops[]=[];
  constructor(public service :CrudService,private router: Router) { }

  ngOnInit(): void {
    this.service.fetchMarketplace().subscribe((data: MarketplaceCrops[])=>{
      console.log(data)
      this.viewmarketplace = data;});  
  }
  gotofarmerwelcome()
  {
   this.router.navigate(['Homepage'])
  }
}
