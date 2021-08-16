import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceApplication } from 'src/models/InsuranceApplication';
import { InsuranceClaim } from 'src/models/InsuranceClaim';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-insurance-claim',
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.css']
})
export class InsuranceClaimComponent implements OnInit {
  insuranceclaimform!: FormGroup;
  insuranceclaim!: InsuranceClaim;
  insuranceclaimfetchvar: InsuranceClaim[] = [];
  insuranceapplicationfetchvar: InsuranceApplication[] = [];

  constructor(public service: CrudService, public fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.insuranceclaimform = this.fb.group({
      ClaimId: [],
      DateOfRequest: [],
      PolicyNo: [],
      CauseOfLoss: [],
      DateOfLoss: [],
      ClaimStatus: [],

    })

    this.service.InsuranceClaimFetchFunc().subscribe((data: InsuranceClaim[]) => { this.insuranceclaimfetchvar = data });
    this.service.InsuranceApplicationFetchFunc().subscribe((data: InsuranceApplication[]) => { this.insuranceapplicationfetchvar = data });
  }

  submitForm() {

    this.insuranceclaimform.value.ClaimId = this.insuranceclaimfetchvar.length + 1;
    this.insuranceclaimform.value.ClaimStatus = false;

    if (this.insuranceclaimform.value.PolicyNo > this.insuranceapplicationfetchvar.length)
      alert("Please Enter Correct Policy Number");
    else {
      this.service.InsuranceClaimFunc(this.insuranceclaimform.value).subscribe();
      alert("Claimed submitted!");
      this.gotofarmerwelcome();
    }
  }

  gotofarmerwelcome() {
    this.router.navigate(['FarmerWelcome'])
  }

}
