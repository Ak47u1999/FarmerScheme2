import { Component, OnInit } from '@angular/core';
import { BidderAddress } from 'src/models/BidderAddress';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { BidderIdentity } from 'src/models/BidderIdentity';

@Component({
  selector: 'app-registration-bidder-address',
  templateUrl: './registration-bidder-address.component.html',
  styleUrls: ['./registration-bidder-address.component.css']
})
export class RegistrationBidderAddressComponent implements OnInit {

  bidderAddressRegistrationForm!: FormGroup;
  bidderaddress!: BidderAddress;
  bidderidentityfetchvar: BidderIdentity[] = [];

  constructor(public service: CrudService, public fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.bidderAddressRegistrationForm = this.fb.group({
      BidderId: [],
      BidderAddress1: [],
      BidderCity: [],
      BidderState: [],
      BidderPincode: [],
    })

    this.service.BidderIdentityFetchFunc().subscribe((data: BidderIdentity[]) => { this.bidderidentityfetchvar = data })

  }
  gotobidderloginagain() { this.router.navigate(['BidderLogin']) }
  submitForm() {

    this.bidderAddressRegistrationForm.value.BidderId = this.bidderidentityfetchvar.length - 1;
    this.service.BidderAddressRegistrationFunc(this.bidderAddressRegistrationForm.value).subscribe();
    alert("Registration Successful!");
    this.router.navigate(['BidderLogin']);
  }

}