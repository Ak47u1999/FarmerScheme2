import { FarmerAddress } from "./FarmerAddress";

export interface Farmeridentity
{
  
     farmerId : number;
     farmerName : string ;
     CropName : string;
     CropType : string;
     PhoneNumber : string;
     FarmerMailId : string;
     BankAccNo : string;
     BankIfsc : string;
     DocumentStatus : boolean ;
     FarmerPassword : string;
     adminApprovalStatus : boolean ;

     Farmeraddress : FarmerAddress;
}