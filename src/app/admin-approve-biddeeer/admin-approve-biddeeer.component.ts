import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BidderIdentity } from 'src/models/BidderIdentity';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-admin-approve-biddeeer',
  templateUrl: './admin-approve-biddeeer.component.html',
  styleUrls: ['./admin-approve-biddeeer.component.css']
})
export class AdminApproveBiddeeerComponent implements OnInit {
  bidders: BidderIdentity[] = [];
  constructor(public service: CrudService, public fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.service.fetchbidder().subscribe((data: BidderIdentity[]) => {
      console.log(data)
      this.bidders = data;
      
    });
  }
  gotoadminhome()
  { 
    this.router.navigate(['admin'])
  }

}
