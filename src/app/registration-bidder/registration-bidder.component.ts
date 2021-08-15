import { Component, OnInit } from '@angular/core';
import { BidderIdentity } from 'src/models/BidderIdentity';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration-bidder',
  templateUrl: './registration-bidder.component.html',
  styleUrls: ['./registration-bidder.component.css']
})
export class RegistrationBidderComponent implements OnInit {
  BidderRegistrationForm!: FormGroup;
  bidder!:BidderIdentity;
  bidderidentityfetchvar : BidderIdentity [] = [];

  constructor(public service:CrudService, public fb :FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.BidderRegistrationForm=this.fb.group({
    BidderId : [],
    BidderName : [] ,
    BidderPhoneNumber : [] ,
    BidderMailId : [] ,
    BidderBankAccNo : [] ,
    BidderBankIfsc : [] ,
    BidderDocumentStatus : [],
    BidderPassword : [],
    BidderAdminApprovalStatus : [],
    })

    this.service.BidderIdentityFetchFunc().subscribe((data : BidderIdentity[]) => {this.bidderidentityfetchvar=data})
  }
  gotobidderaddress()
  {  this.router.navigate(['bidderaddress']) }

  submitForm() {

    this.BidderRegistrationForm.value.BidderId=this.bidderidentityfetchvar.length+1;
    this.service.BidderRegistrationFunc(this.BidderRegistrationForm.value).subscribe();
    this.gotobidderaddress();
  }

}
