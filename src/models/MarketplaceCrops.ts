export interface MarketplaceCrops
{

     requestId : number ;
     farmerId : number ;
     cropName : string ;
     cropType : string ;
     fertilizerType : string ;
     quantity : number ;
     isTransactionCompleted :boolean ;
     postedDate : Date;
     highestBid : number;
}