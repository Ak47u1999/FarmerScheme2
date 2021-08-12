import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MarketplaceCrops } from 'src/models/MarketplaceCrops';

@Component({
  selector: 'app-farmerplacerequest',
  templateUrl: './farmerplacerequest.component.html',
  styleUrls: ['./farmerplacerequest.component.css']
})
export class FarmerplacerequestComponent implements OnInit {

  farmerplacerequest!: FormGroup;
  farmerrequest!:MarketplaceCrops;

  constructor(public service:CrudService, public fb :FormBuilder) { }

  ngOnInit(): void {
    this.farmerplacerequest=this.fb.group({

      requestId : [] ,
      farmerId : [] ,
      cropName : [] ,
      cropType : [] ,
      fertilizerType : [] ,
      quantity : [] ,
      isTransactionCompleted :[] ,
      postedDate : [] ,
     })
  }

  submitForm() {
    this.service.FarmerPlaceRequestFunc(this.farmerplacerequest.value).subscribe();
  }
}
