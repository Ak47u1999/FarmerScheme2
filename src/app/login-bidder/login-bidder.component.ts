import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Loginfeildfarmer } from 'src/models/Loginfeildfarmer';
import { CrudService } from '../services/crud.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-bidder',
  templateUrl: './login-bidder.component.html',
  styleUrls: ['./login-bidder.component.css']
})
export class LoginBidderComponent implements OnInit {
  bidderloginForm!: FormGroup;
  LoginBidder !: Loginfeildfarmer;
  val : number =-100;

  constructor(public service:CrudService, public fb :FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.bidderloginForm=this.fb.group({
      Uname : [],
      Password : [] ,
      })
  }


  submitForm(){
    this.bidderloginForm.value.isValid = false;
    if(this.bidderloginForm.value.Uname == null)
      this.bidderloginForm.value.Uname="NoSuchExists";
    if(this.bidderloginForm.value.Password == null)
      this.bidderloginForm.value.Password="NoSuchExists";

      this.service.LoginBidderPostFunc(this.bidderloginForm.value).subscribe(
      (page: number) => {
        console.log(page);
      this.val=page;
   });

   if(this.val == 1)
    this.gotoBidderwelcome();
   else
    if(this.val ==0)
    {
      alert("Wrong password!");
      this.val=-100;
    }
  }

  gotoBidderwelcome()
  { 
    this.router.navigate(['bidderwelcome'])
  }
  gotoBidderreg()
  { 
    this.router.navigate(['BidderRegistration'])
  }
}
