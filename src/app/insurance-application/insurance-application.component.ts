import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InsuranceApplication } from 'src/models/InsuranceApplication';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-insurance-application',
  templateUrl: './insurance-application.component.html',
  styleUrls: ['./insurance-application.component.css']
})
export class InsuranceApplicationComponent implements OnInit {
  
  premiumamt ? : number;
  suminsuredperhectare ? : number;
  insuranceApplicationForm! : FormGroup;
  insuranceApplication !: InsuranceApplication;
  insurancefetchvar : InsuranceApplication [] =[];

  constructor(public service :CrudService, public fb: FormBuilder,private router: Router) {  
    
  }


  ngOnInit(): void {

    this.insuranceApplicationForm =this.fb.group({
    PolicyNo: [],
    FarmerId: [], 
    InsuranceCompany: [], 
    SumInsuredPerHecter: [],
    PremiumAmount: [],
    CropName: [],
    Area: [],
    TotalSumInsured: [],
    Status: [],
    })

    this.service.InsuranceApplicationFetchFunc().subscribe((data: InsuranceApplication[]) => {this.insurancefetchvar =data});
  
  }
  gotofarmerwelcome()
  {
    this.router.navigate(['FarmerWelcome'])
  }

  submitForm() {
    
    this.insuranceApplicationForm.value.PolicyNo=this.insurancefetchvar.length+1;
    // console.log(this.insuranceApplicationForm.value.TotalSumInsured);
    if(this.insuranceApplicationForm.value.CropName === "Kharif")
     this.premiumamt = 0.02 * this.insuranceApplicationForm.value.TotalSumInsured;
    else
     if(this.insuranceApplicationForm.value.CropName === "Rabi")
       this.premiumamt = 0.015 * this.insuranceApplicationForm.value.TotalSumInsured;
      else
        this.premiumamt = 0.05 * this.insuranceApplicationForm.value.TotalSumInsured;

    this.suminsuredperhectare= (this.insuranceApplicationForm.value.TotalSumInsured)/(this.insuranceApplicationForm.value.Area);
    this.insuranceApplicationForm.value.PremiumAmount=this.premiumamt;
    this.insuranceApplicationForm.value.SumInsuredPerHecter=this.suminsuredperhectare;

    this.service.InsuranceApplicationFunc(this.insuranceApplicationForm.value).subscribe();
  }

}
