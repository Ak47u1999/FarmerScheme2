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
  public highestbid123 : number =0;
  
  // currentbid: MarketPlaceTransactions[] = [];
  // bidderposthisbidform !: FormGroup;
  // bidderbid !: MarketPlaceTransactions;

  // tosendrequestId: number = 0;
  // tosendtransactionId: number = 0;

  constructor(public service: CrudService, public fb: FormBuilder, private router: Router) {

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

      for (let i: number = 0; i < this.crops.length; i++) {
        if (this.crops[i].highestBid == null)
          this.crops[i].highestBid = 0;
      }
    });

    // this.service.fetchcurrentbid().subscribe((data: MarketPlaceTransactions[]) => {
    //   console.log(data)
    //   this.currentbid = data;

    // });
  }
  gotohome() { this.router.navigate(['HomepageComponent']) }


  bidcheck(requestid: number) {
    //    console.log(this.highestbid,requestid);
    if (this.crops[requestid - 1].highestBid >= this.highestbid123)
      alert("Please enter Higher Bid");
    else {
      this.crops[requestid - 1].highestBid = this.highestbid123;
      this.service.updatehighestbid(requestid, this.crops[requestid - 1]).subscribe((data: number) => console.log(data));
      alert("Successfully placed bid");
    }
  }

    // submitForm() {
      
      

    //   // this.bidderposthisbidform.value.transactionId = this.currentbid.length + 1;
    //   // this.bidderposthisbidform.value.requestId = this.crops.length + 1;

    //   // this.service.BidderBidPostFunc(this.bidderposthisbidform.value).subscribe();
    //   /* this.router.navigate(['BidderLogin']); */
    //   /*  this.gotohome(); */
    // }
  }
