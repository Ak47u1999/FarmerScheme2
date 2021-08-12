import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceApplication } from 'src/models/InsuranceApplication';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FarmerwelcomepageComponent } from './farmerwelcomepage/farmerwelcomepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InsuranceApplicationComponent } from './insurance-application/insurance-application.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
import { LoginBidderComponent } from './login-bidder/login-bidder.component';
import { LoginFarmerComponent } from './login-farmer/login-farmer.component';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { RegistrationBidderComponent } from './registration-bidder/registration-bidder.component';
import { RegistrationFarmerComponent } from './registration-farmer/registration-farmer.component';



const routes: Routes = [

  {path:'Applyforpolicy',component:InsuranceApplicationComponent},
  {path:'ClaimInsurance',component:InsuranceClaimComponent},
  {path:'BidderRegistration',component:RegistrationBidderComponent},
  {path:'FarmerRegistration',component:RegistrationFarmerComponent},
  {path:'BidderLogin',component:LoginBidderComponent},
  {path:'FarmerLogin',component:LoginFarmerComponent},
  {path:'FarmerWelcome',component:FarmerwelcomepageComponent},
  {path:'Aboutpage',component:AboutpageComponent},
  {path:'Contactpage',component:ContactpageComponent},
  {path:'Homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'MarketPlace',component:MarketplaceComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
