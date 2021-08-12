import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Loginfeildfarmer } from 'src/models/Loginfeildfarmer';
import { CrudService } from '../services/crud.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-bidder',
  templateUrl: './login-bidder.component.html',
  styleUrls: ['./login-bidder.component.css']
})
export class LoginBidderComponent implements OnInit {
  bidderloginForm!: FormGroup;
  LoginBidder !: Loginfeildfarmer;
  val : number =0;

  constructor(public service:CrudService, public fb :FormBuilder) { }

  ngOnInit(): void {

    this.bidderloginForm=this.fb.group({
      Uname : [],
      Password : [] ,
      })
  }

  submitForm(){

    this.bidderloginForm.value.isValid = false;
    this.service.LoginBidderPostFunc(this.bidderloginForm.value).subscribe(
      (page: number) => {
      this.val=page;
   });

  }

}
