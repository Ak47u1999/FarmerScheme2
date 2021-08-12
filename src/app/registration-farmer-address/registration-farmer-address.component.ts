import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FarmerAddress } from 'src/models/FarmerAddress';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-registration-farmer-address',
  templateUrl: './registration-farmer-address.component.html',
  styleUrls: ['./registration-farmer-address.component.css']
})
export class RegistrationFarmerAddressComponent implements OnInit {

  farmerAddressRegistrationForm! : FormGroup;
  farmeraddress! : FarmerAddress;

  constructor(public service :CrudService, public fb :FormBuilder) { }

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
  }

  submitForm() {
    this.service.FarmerAddressRegistrationFunc(this.farmerAddressRegistrationForm.value).subscribe();
  }
}
