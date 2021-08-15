import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Farmeridentity } from 'src/models/FarmerIdentity';
import { Observable } from 'rxjs';
import { BidderIdentity } from 'src/models/BidderIdentity';
import { InsuranceApplication } from 'src/models/InsuranceApplication';
import { FarmerAddress } from 'src/models/FarmerAddress';
import { InsuranceClaim } from 'src/models/InsuranceClaim';
import { BidderAddress } from 'src/models/BidderAddress';
import { MarketplaceCrops } from 'src/models/MarketplaceCrops';
import { Loginfeildfarmer } from 'src/models/Loginfeildfarmer';
import {Farmersoldhistory } from 'src/models/FarmersoldHistory';
import { MarketPlaceTransactions } from 'src/models/MarketPlaceTransactions';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private ApiUrl="http://localhost:49295/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  FarmerIdentityRegistrationFunc(farmeridentity : any): Observable<Farmeridentity> {
    return this.httpClient.post<Farmeridentity>(this.ApiUrl + '/Farmeridentities/', JSON.stringify(farmeridentity), this.httpOptions)    
  } 
  FarmerIdentityFetchFunc(): Observable<Farmeridentity []> {
    return this.httpClient.get<Farmeridentity []>(this.ApiUrl + '/Farmeridentities/')    
  } 
  FarmerAddressRegistrationFunc(farmeraddress : any): Observable<FarmerAddress> {
    return this.httpClient.post<FarmerAddress>(this.ApiUrl + '/FarmerAddresses/', JSON.stringify(farmeraddress), this.httpOptions)    
  } 

  BidderRegistrationFunc(bidderidentity : any): Observable<BidderIdentity> {
    return this.httpClient.post<BidderIdentity>(this.ApiUrl + '/BidderIdentities/', JSON.stringify(bidderidentity), this.httpOptions)    
  } 
  BidderIdentityFetchFunc(): Observable<BidderIdentity[]> {
    return this.httpClient.get<BidderIdentity[]>(this.ApiUrl + '/BidderIdentities/')    
  } 
  BidderAddressRegistrationFunc(bidderaddress : any): Observable<BidderAddress> {
    return this.httpClient.post<BidderAddress>(this.ApiUrl + '/BidderAddresses/', JSON.stringify(bidderaddress), this.httpOptions)    
  } 

  InsuranceApplicationFetchFunc(): Observable<InsuranceApplication []> {
    return this.httpClient.get<InsuranceApplication []>(this.ApiUrl + '/InsuranceApplications/',)    
  } 
  InsuranceApplicationFunc(insuranceapplication : any): Observable<InsuranceApplication> {
    return this.httpClient.post<InsuranceApplication>(this.ApiUrl + '/InsuranceApplications/', JSON.stringify(insuranceapplication), this.httpOptions)    
  } 

  InsuranceClaimFunc(insuranceclaimapplication : any): Observable<InsuranceClaim> {
    return this.httpClient.post<InsuranceClaim>(this.ApiUrl + '/InsuranceClaims/', JSON.stringify(insuranceclaimapplication), this.httpOptions)    
  } 
  InsuranceClaimFetchFunc(): Observable<InsuranceClaim []> {
    return this.httpClient.get<InsuranceClaim []>(this.ApiUrl + '/InsuranceClaims/')    
  } 

  fetchMarketplace(): Observable<MarketplaceCrops[]> {
    return this.httpClient.get<MarketplaceCrops[]>(this.ApiUrl + '/Marketplacecrops/')    
  }
  fetchsoldhistory(): Observable<Farmersoldhistory[]> {
    return this.httpClient.get<Farmersoldhistory[]>(this.ApiUrl + '/Farmersoldhistories/')    
  }

  LoginFarmerPostFunc(loginfarmerpost : any): Observable<number> {
    return this.httpClient.post<number>(this.ApiUrl + '/Loginfarmercheck/', JSON.stringify(loginfarmerpost), this.httpOptions)    
  } 

  LoginBidderPostFunc(loginbidderpost : any): Observable<number> {
    return this.httpClient.post<number>(this.ApiUrl + '/Loginbiddercheck/', JSON.stringify(loginbidderpost), this.httpOptions)    
  } 

  fetchcroptype(): Observable<MarketplaceCrops[]> {
    return this.httpClient.get<MarketplaceCrops[]>(this.ApiUrl + '/MarketplaceCrops/')    
  }
  fetchcurrentbid(): Observable<MarketPlaceTransactions[]> {
  return this.httpClient.get<MarketPlaceTransactions[]>(this.ApiUrl + '/MarketPlaceTransactions/')
  
  }
  FarmerPlaceRequestFunc(farmerplacerequest : any): Observable<MarketplaceCrops[]> {
    return this.httpClient.post<MarketplaceCrops[]>(this.ApiUrl + '/Marketplacecrops/', JSON.stringify(farmerplacerequest), this.httpOptions)    
  }
  FarmerFetchRequestFunc(): Observable<MarketplaceCrops[]> {
    return this.httpClient.get<MarketplaceCrops[]>(this.ApiUrl + '/Marketplacecrops/')    
  }
  BidderBidPostFunc(bidderposthisbid : any): Observable<number> {
    return this.httpClient.post<number>(this.ApiUrl + '/Marketplacetransactions/', JSON.stringify(bidderposthisbid), this.httpOptions)    
  }
  
  fetchfarmer(): Observable<Farmeridentity[]> {
    return this.httpClient.get<Farmeridentity[]>(this.ApiUrl + '/Farmeridentities/')    
  }
  fetchbidder(): Observable<BidderIdentity[]> {
    return this.httpClient.get<BidderIdentity[]>(this.ApiUrl + '/Bidderidentities/')    
  }
  fetchtransaction(): Observable<MarketPlaceTransactions[]> {
    return this.httpClient.get<MarketPlaceTransactions[]>(this.ApiUrl + '/Marketplacetransactions/')    
  }
}
