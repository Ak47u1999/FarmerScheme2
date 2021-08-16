import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarketplaceCrops } from 'src/models/MarketplaceCrops';
import { MarketPlaceTransactions } from 'src/models/MarketPlaceTransactions';
import { CrudService } from '../services/crud.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidderwelcomepage',
  templateUrl: './bidderwelcomepage.component.html',
  styleUrls: ['./bidderwelcomepage.component.css']
})
export class BidderwelcomepageComponent implements OnInit {
  crops: MarketplaceCrops[] = [];
  currentbid: MarketPlaceTransactions[] = [];
  bidderposthisbidform !: FormGroup;
  bidderbid !: MarketPlaceTransactions;

  tosendrequestId   : number = 0;
  tosendtransactionId  : number = 0;

  constructor(public service: CrudService, public fb: FormBuilder,private router: Router) {

    this.bidderposthisbidform = this.fb.group({
      transactionId: [],
      requestId: [],
      bidderId: [],
      bidAmount: [],
      bidDate: [],
      bidAdminApprovalStatus: [],
    })
  }

  ngOnInit(): void {

    this.service.fetchcroptype().subscribe((data: MarketplaceCrops[]) => {
      console.log(data)
      this.crops = data;
      
    });

    this.service.fetchcurrentbid().subscribe((data: MarketPlaceTransactions[]) => {
      console.log(data)
      this.currentbid = data;

      for(let i :number =0;i<this.currentbid.length;i=i+1)
      {
        if(this.currentbid[i].requestId > this.tosendrequestId)
          this.tosendrequestId = this.currentbid[i].requestId;
      }
      this.tosendrequestId=this.tosendrequestId+1;

      for(let i :number =0;i<this.currentbid.length;i=i+1)
      {
        if(this.currentbid[i].transactionId > this.tosendtransactionId)
        this.tosendtransactionId = this.currentbid[i].transactionId;
      }
      this.tosendtransactionId=this.tosendtransactionId+1;
    });
  }
  gotohome()
  {  this.router.navigate(['HomepageComponent']) }


  submitForm() {
    this.bidderposthisbidform.value.transactionId = this.tosendtransactionId;
    this.bidderposthisbidform.value.requestId = this.tosendrequestId;

    this.service.BidderBidPostFunc(this.bidderposthisbidform.value).subscribe();
    /* this.router.navigate(['BidderLogin']); */
   /*  this.gotohome(); */
  }
}
