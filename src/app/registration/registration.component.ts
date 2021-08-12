import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  gotoFarmer(){
    this.router.navigate(['FarmerRegistration'])
  }

  gotoBidder(){
    this.router.navigate(['BidderRegistration']) 
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
