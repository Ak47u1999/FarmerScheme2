import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MarketplaceCrops } from 'src/models/MarketplaceCrops';
import { Farmeridentity } from 'src/models/FarmerIdentity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerplacerequest',
  templateUrl: './farmerplacerequest.component.html',
  styleUrls: ['./farmerplacerequest.component.css']
})
export class FarmerplacerequestComponent implements OnInit {

  farmerplacerequest!: FormGroup;
  farmerrequest!:MarketplaceCrops;
  farmerrequestarr :MarketplaceCrops[] =[];
  requestIdpost : number = -100;
  farmeridentity : Farmeridentity[] =[];

  constructor(public service:CrudService, public fb :FormBuilder,private router: Router) { }

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

    this.service.FarmerFetchRequestFunc().subscribe((data: MarketplaceCrops[]) => {
      console.log(data)
      this.farmerrequestarr = data;

      for(let i :number =0;i<this.farmerrequestarr.length;i=i+1)
      {
        if(this.farmerrequestarr[i].requestId > this.requestIdpost)
          this.requestIdpost = this.farmerrequestarr[i].requestId;
      }
      this.requestIdpost=this.requestIdpost+1;

    });

    this.service.FarmerIdentityFetchFunc().subscribe((data : Farmeridentity[]) => {this.farmeridentity=data});
  }

   submitForm() {
    this.farmerplacerequest.value.requestId=this.requestIdpost;

    if(this.farmerplacerequest.value.farmerId > this.farmeridentity.length)
     alert("Please Enter correct Farmer ID");
    else
    {
      this.service.FarmerPlaceRequestFunc(this.farmerplacerequest.value).subscribe();
      this.router.navigate(['FarmerWelcome'])      
    }
  }
    
}
