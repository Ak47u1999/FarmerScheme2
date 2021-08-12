import { Component, OnInit } from '@angular/core';
import { BidderAddress } from 'src/models/BidderAddress';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-registration-bidder-address',
  templateUrl: './registration-bidder-address.component.html',
  styleUrls: ['./registration-bidder-address.component.css']
})
export class RegistrationBidderAddressComponent implements OnInit {

  bidderAddressRegistrationForm! : FormGroup;
  bidderaddress! : BidderAddress;

  constructor(public service :CrudService, public fb :FormBuilder) { }

  ngOnInit(): void {
    this.bidderAddressRegistrationForm = this.fb.group({
     BidderId :[],
     BidderAddress1 :[],
     BidderCity :[],
     BidderState :[],
     BidderPincode : [],
    })


  }
  submitForm(){

    this.service.BidderAddressRegistrationFunc(this.bidderAddressRegistrationForm.value).subscribe();

  }

}
