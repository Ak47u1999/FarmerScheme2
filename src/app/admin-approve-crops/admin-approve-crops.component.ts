import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketplaceCrops } from 'src/models/MarketplaceCrops';
import { MarketPlaceTransactions } from 'src/models/MarketPlaceTransactions';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-admin-approve-crops',
  templateUrl: './admin-approve-crops.component.html',
  styleUrls: ['./admin-approve-crops.component.css']
})
export class AdminApproveCropsComponent implements OnInit {
  crops: MarketplaceCrops[] = [];
  // currentbid: MarketPlaceTransactions[] = [];
  bidderposthisbidform !: FormGroup;
  bidderbid !: MarketPlaceTransactions;
  constructor(public service: CrudService, public fb: FormBuilder,private router:Router) { 
    // this.bidderposthisbidform = this.fb.group({
    //   transactionId: [],
    //   requestId: [],
    //   bidderId: [],
    //   bidAmount: [],
    //   bidDate: [],
    //   bidAdminApprovalStatus: [],
    // })
  }

  ngOnInit(): void {
    this.service.fetchcroptype().subscribe((data: MarketplaceCrops[]) => {
      console.log(data)
      this.crops = data;
      
    });
  }

  approve(id : number)
  {
    this.service.AdminApproveCropsFunc(id).subscribe();
    alert("Refresh to see changes!");
  }

  gotoadminhome()
  { 
    this.router.navigate(['admin'])
  }
}
