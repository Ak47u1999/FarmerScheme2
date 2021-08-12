import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder } from '@angular/forms';
import { Farmeridentity } from 'src/models/FarmerIdentity';
import { ReactiveFormsModule } from '@angular/forms';
import { InsuranceApplication } from 'src/models/InsuranceApplication';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-registration-farmer',
  templateUrl: './registration-farmer.component.html',
  styleUrls: ['./registration-farmer.component.css']
})
export class RegistrationFarmerComponent implements OnInit {
 
  farmerRegistrationForm! : FormGroup;
  farmeridentity! : Farmeridentity;

  constructor(public service :CrudService, public fb :FormBuilder) { }

  ngOnInit(): void {

    this.farmerRegistrationForm = this.fb.group({
    FarmerId : [],
     FarmerName : [] ,
     CropName : [],
     CropType : [],
     PhoneNumber : [],
     FarmerMailId : [],
     BankAccNo : [],
     BankIfsc : [],
     DocumentStatus : [],
     FarmerPassword : [],
     AdminApprovalStatus : [],
    })
  }
  
  submitForm() {
    this.service.FarmerIdentityRegistrationFunc(this.farmerRegistrationForm.value).subscribe();
  }
}
