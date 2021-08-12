import { FarmerAddress } from "./FarmerAddress";

export interface Farmeridentity
{
  
     FarmerId : number;
     FarmerName : string ;
     CropName : string;
     CropType : string;
     PhoneNumber : string;
     FarmerMailId : string;
     BankAccNo : string;
     BankIfsc : string;
     DocumentStatus : boolean ;
     FarmerPassword : string;
     AdminApprovalStatus : boolean ;

     Farmeraddress : FarmerAddress;
}