import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketplaceCrops } from 'src/models/MarketplaceCrops';
import { MarketPlaceTransactions } from 'src/models/MarketPlaceTransactions';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'] 
})
export class AdminHomeComponent implements OnInit {
 
  
  constructor(public service: CrudService, public fb: FormBuilder,private router:Router) { 
    
  }

  ngOnInit(): void {
   
  }
  farmerapprove()
  {
    this.router.navigate(['farmerapprove'])
  }
  gotoapprovebidder()
  {
    this.router.navigate(['bidderapprove'])
  }
  gotoapprovetransaction()
  {
    this.router.navigate(['transactionapprove'])
  }
  gotoapproverequest()
  {
    this.router.navigate(['requestapprove'])
  }
}
