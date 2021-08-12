import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidderwelcomepageComponent } from './bidderwelcomepage/bidderwelcomepage.component';
import { FarmerwelcomepageComponent } from './farmerwelcomepage/farmerwelcomepage.component';
import { IndexComponent } from './index/index.component';
import { InsuranceApplicationComponent } from './insurance-application/insurance-application.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
import { LoginComponent } from './login/login.component';
import { LoginBidderComponent } from './login-bidder/login-bidder.component';
import { LoginFarmerComponent } from './login-farmer/login-farmer.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationBidderComponent } from './registration-bidder/registration-bidder.component';
import { RegistrationFarmerComponent } from './registration-farmer/registration-farmer.component';
import { HttpClientModule } from '@angular/common/http';
import { FarmerAddressRegistrationComponent } from './farmer-address-registration/farmer-address-registration.component';
import { RegistrationFarmerAddressComponent } from './registration-farmer-address/registration-farmer-address.component';
import { RegistrationBidderAddressComponent } from './registration-bidder-address/registration-bidder-address.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SellhistoryComponent } from './sellhistory/sellhistory.component';
import { FarmerplacerequestComponent } from './farmerplacerequest/farmerplacerequest.component';

@NgModule({
  declarations: [
    AppComponent,
    BidderwelcomepageComponent,
    FarmerwelcomepageComponent,
    IndexComponent,
    InsuranceApplicationComponent,
    InsuranceClaimComponent,
    LoginComponent,
    LoginBidderComponent,
    LoginFarmerComponent,
    MarketplaceComponent,
    RegistrationComponent,
    RegistrationBidderComponent,
    RegistrationFarmerComponent,
    FarmerAddressRegistrationComponent,
    RegistrationFarmerAddressComponent,
    RegistrationBidderAddressComponent,
    HomepageComponent,
    AboutpageComponent,
    ContactpageComponent,
    NavbarComponent,
    FooterComponent,
    SellhistoryComponent,
    FarmerplacerequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
