import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Loginfeildfarmer } from 'src/models/Loginfeildfarmer';
import { CrudService } from '../services/crud.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-farmer',
  templateUrl: './login-farmer.component.html',
  styleUrls: ['./login-farmer.component.css']
})
export class LoginFarmerComponent implements OnInit {

  loginfarmerform ! : FormGroup;
  Loginfarmer !: Loginfeildfarmer;
  val : number =0;

  constructor(public service:CrudService, public fb :FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.loginfarmerform=this.fb.group({
      Uname : [],
      Password : [] ,
      })}

      gotoFarmerreg()
      {
        this.router.navigate(['FarmerRegistration'])
      }
      gotoFarmerwelcome()
      {
        this.router.navigate(['FarmerWelcome'])
      }

  submitForm() {
    this.loginfarmerform.value.isValid = false;
    this.service.LoginFarmerPostFunc(this.loginfarmerform.value).subscribe(
      (page: number) => {
      this.val=page;
  });

  }

}
