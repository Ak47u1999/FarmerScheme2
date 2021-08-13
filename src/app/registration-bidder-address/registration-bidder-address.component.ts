import { Component, OnInit } from '@angular/core';
import { BidderAddress } from 'src/models/BidderAddress';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-bidder-address',
  templateUrl: './registration-bidder-address.component.html',
  styleUrls: ['./registration-bidder-address.component.css']
})
export class RegistrationBidderAddressComponent implements OnInit {

  bidderAddressRegistrationForm! : FormGroup;
  bidderaddress! : BidderAddress;

  constructor(public service :CrudService, public fb :FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.bidderAddressRegistrationForm = this.fb.group({
     BidderId :[],
     BidderAddress1 :[],
     BidderCity :[],
     BidderState :[],
     BidderPincode : [],
    })
    


  }
  gotobidderloginagain()
  {  this.router.navigate(['BidderLogin']) }
  submitForm(){

    this.service.BidderAddressRegistrationFunc(this.bidderAddressRegistrationForm.value).subscribe();

  }

}

