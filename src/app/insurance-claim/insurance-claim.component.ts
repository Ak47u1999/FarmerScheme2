import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceClaim } from 'src/models/InsuranceClaim';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-insurance-claim',
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.css']
})
export class InsuranceClaimComponent implements OnInit {
  insuranceclaimform! : FormGroup;
  insuranceclaim!: InsuranceClaim; 
  constructor(public service :CrudService, public fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.insuranceclaimform =this.fb.group({
      ClaimId: [],
      DateOfRequest:[],
      PolicyNo:[],
      CauseOfLoss:[],
      DateOfLoss:[],
      ClaimStatus:[],

    })
  }

  submitForm() {

    this.insuranceclaimform.value.ClaimStatus=0;
    this.service.InsuranceClaimFunc(this.insuranceclaimform.value).subscribe();
  }
  gotofarmerwelcome()
  {
    this.router.navigate(['FarmerWelcome'])
  }
}
