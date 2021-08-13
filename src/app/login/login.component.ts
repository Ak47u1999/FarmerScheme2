import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoBidderlogin()
  {  this.router.navigate(['BidderLogin']) }
  gotoFarmerlogin()
  {   this.router.navigate(['FarmerLogin']) }
  gotoexit()
  {

    this.router.navigate(['Homepage'])
  }
}
