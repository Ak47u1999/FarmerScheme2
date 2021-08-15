import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceApplication } from 'src/models/InsuranceApplication';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AdminApproveBiddeeerComponent } from './admin-approve-biddeeer/admin-approve-biddeeer.component';
import { AdminApproveCropsComponent } from './admin-approve-crops/admin-approve-crops.component';
import { AdminApproveFarmerComponent } from './admin-approve-farmer/admin-approve-farmer.component';
import { AdminApproveTransactionComponent } from './admin-approve-transaction/admin-approve-transaction.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BidderwelcomepageComponent } from './bidderwelcomepage/bidderwelcomepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FarmerplacerequestComponent } from './farmerplacerequest/farmerplacerequest.component';
import { FarmerwelcomepageComponent } from './farmerwelcomepage/farmerwelcomepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexComponent } from './index/index.component';
import { InsuranceApplicationComponent } from './insurance-application/insurance-application.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
import { LoginBidderComponent } from './login-bidder/login-bidder.component';
import { LoginFarmerComponent } from './login-farmer/login-farmer.component';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { RegistrationBidderAddressComponent } from './registration-bidder-address/registration-bidder-address.component';
import { RegistrationBidderComponent } from './registration-bidder/registration-bidder.component';
import { RegistrationFarmerAddressComponent } from './registration-farmer-address/registration-farmer-address.component';
import { RegistrationFarmerComponent } from './registration-farmer/registration-farmer.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellhistoryComponent } from './sellhistory/sellhistory.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';




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
  {path:'bidderaddress',component:RegistrationBidderAddressComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'bidderwelcome',component: BidderwelcomepageComponent},
  {path:'farmeraddress',component: RegistrationFarmerAddressComponent},
  {path:'placerequest',component: FarmerplacerequestComponent},
  {path:'sellhistory',component: SellhistoryComponent},
  {path:'insurance',component: IndexComponent},
  {path:'admin',component: AdminHomeComponent},
  {path:'farmerapprove',component:AdminApproveFarmerComponent },
  {path:'bidderapprove',component: AdminApproveBiddeeerComponent},
  {path:'transactionapprove',component: AdminApproveTransactionComponent},
  {path:'requestapprove',component:AdminApproveCropsComponent },
  {path:'adminlogin',component:AdminLoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
