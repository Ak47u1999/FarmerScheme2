import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MarketPlaceTransactions } from 'src/models/MarketPlaceTransactions';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-admin-approve-transaction',
  templateUrl: './admin-approve-transaction.component.html',
  styleUrls: ['./admin-approve-transaction.component.css']
})
export class AdminApproveTransactionComponent implements OnInit {
  // crops: MarketplaceCrops[] = [];
  transact: MarketPlaceTransactions[] = [];
  // bidderposthisbidform !: FormGroup;
  bidderbid !: MarketPlaceTransactions;
  constructor(public service: CrudService, public fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.service.fetchtransaction().subscribe((data: MarketPlaceTransactions[]) => {
      console.log(data)
      this.transact = data;
      
    });
  }

  approval(id : any)
  {
    this.service.AdminApproveTranactionFunc(id).subscribe();
    alert("Refresh to see changes!");
  }

  gotoadminhome()
  { 
    this.router.navigate(['admin'])
  }

}
