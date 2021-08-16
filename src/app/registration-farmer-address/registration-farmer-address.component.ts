import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmerAddress } from 'src/models/FarmerAddress';
import { Farmeridentity } from 'src/models/FarmerIdentity';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-registration-farmer-address',
  templateUrl: './registration-farmer-address.component.html',
  styleUrls: ['./registration-farmer-address.component.css']
})
export class RegistrationFarmerAddressComponent implements OnInit {

  farmerAddressRegistrationForm! : FormGroup;
  farmeraddress! : FarmerAddress;
  farmeridentityfetchvar : Farmeridentity []=[];


  constructor(public service :CrudService, public fb :FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.farmerAddressRegistrationForm = this.fb.group({
      FarmerId : [],
     FarmerAddress1 : [], 
     FarmerCity : [],
     FarmerState : [],
     FarmerPincode : [],
     FarmerLandAddress : [],
     FarmerLandAddressPinCode : []
    })

    this.service.FarmerIdentityFetchFunc().subscribe((data : Farmeridentity []) => {this.farmeridentityfetchvar=data});
  }
  gotofarmerloginagain()
  {  this.router.navigate(['FarmerLogin']) }

  submitForm() {

    this.farmerAddressRegistrationForm.value.FarmerId=this.farmeridentityfetchvar.length+1;

    this.service.FarmerAddressRegistrationFunc(this.farmerAddressRegistrationForm.value).subscribe();

    alert("Form Submitted Successfully!");

    this.gotofarmerloginagain();
  }
}
