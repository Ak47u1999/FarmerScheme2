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
  farmeridentityfetchvar : Farmeridentity []=[];
  DocumentStatus : boolean = false;

  constructor(public service :CrudService, public fb :FormBuilder,private router: Router) { }

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

    this.service.FarmerIdentityFetchFunc().subscribe((data : Farmeridentity []) => {this.farmeridentityfetchvar=data});
  }
  gotofarmeraddress()
  { this.router.navigate(['farmeraddress']) }
  
  gotofarmerregistration()
  { this.router.navigate(['FarmerRegistration']) }
  
  uploadstatus()
  {
    this.DocumentStatus=true;
  }

   submitForm() {

    this.farmerRegistrationForm.value.FarmerId=this.farmeridentityfetchvar.length+1;
    this.farmerRegistrationForm.value.AdminApprovalStatus=false;
    this.farmerRegistrationForm.value.DocumentStatus=this.DocumentStatus;
    if(this.DocumentStatus ==true)
    {
      this.service.FarmerIdentityRegistrationFunc(this.farmerRegistrationForm.value).subscribe();
      this.gotofarmeraddress();
    }
    else
      alert("Please Upload Document!");
  }
}
