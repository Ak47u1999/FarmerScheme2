import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginfeildfarmer } from 'src/models/Loginfeildfarmer';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  Loginfarmer !: Loginfeildfarmer;
  adminloginForm!: FormGroup;

  constructor(public service:CrudService, public fb :FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.adminloginForm=this.fb.group({
      Uname : [],
      Password : [] ,
      })
  }
  submitForm()
  {

  }
  gotoadminhome()
  { 
    this.router.navigate(['admin'])
  }
 
}
