import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmeridentity } from 'src/models/FarmerIdentity';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-admin-approve-farmer',
  templateUrl: './admin-approve-farmer.component.html',
  styleUrls: ['./admin-approve-farmer.component.css']
})
export class AdminApproveFarmerComponent implements OnInit {
  farmers: Farmeridentity[] = [];
  // currentbid: MarketPlaceTransactions[] = [];
  farmerstatusform !: FormGroup;
  // bidderbid !: MarketPlaceTransactions;
  constructor(public service: CrudService, public fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.service.fetchfarmer().subscribe((data: Farmeridentity[]) => {
      console.log(data)
      this.farmers = data;
      
    });
  }

}
