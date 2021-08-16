import { Component, OnInit } from '@angular/core';
import { BidderIdentity } from 'src/models/BidderIdentity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-bidder',
  templateUrl: './registration-bidder.component.html',
  styleUrls: ['./registration-bidder.component.css']
})
export class RegistrationBidderComponent implements OnInit {
  BidderRegistrationForm!: FormGroup;
  bidder!: BidderIdentity;
  bidderidentityfetchvar: BidderIdentity[] = [];

  aadharStatus: number = 0;
  panStatus: number = 0;
  tlStatus: number = 0;

  constructor(public service: CrudService, public fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.BidderRegistrationForm = this.fb.group({
      BidderId: [],
      BidderName: [],
      BidderPhoneNumber: [],
      BidderMailId: [],
      BidderBankAccNo: [],
      BidderBankIfsc: [],
      BidderDocumentStatus: [],
      BidderPassword: [],
      BidderAdminApprovalStatus: [],
    })

    this.service.BidderIdentityFetchFunc().subscribe((data: BidderIdentity[]) => { this.bidderidentityfetchvar = data })
  }
  gotobidderaddress() { this.router.navigate(['bidderaddress']) }

  aadhar() { this.aadharStatus = 1; }
  pan() { this.panStatus = 1; }
  tl() { this.tlStatus = 1; }

  submitForm() {

    if (this.aadharStatus == 1 && this.panStatus == 1 && this.tlStatus == 1) {
      this.BidderRegistrationForm.value.BidderId = this.bidderidentityfetchvar.length + 1;
      this.service.BidderRegistrationFunc(this.BidderRegistrationForm.value).subscribe();
      this.gotobidderaddress();
    }
    else
      alert("Please fill all required fields");
  }

}
