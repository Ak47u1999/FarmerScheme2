import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerwelcomepage',
  templateUrl: './farmerwelcomepage.component.html',
  styleUrls: ['./farmerwelcomepage.component.css']
})
export class FarmerwelcomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoplacerequest()
  { 
    this.router.navigate(['placerequest'])
  }
  gotosellhistory()
  { 
    this.router.navigate(['sellhistory'])
  }
  gotomarketplace()
  { 
    this.router.navigate(['MarketPlace'])
  }
  gotoinsurance()
  { 
    this.router.navigate(['insurance'])
  }

}
