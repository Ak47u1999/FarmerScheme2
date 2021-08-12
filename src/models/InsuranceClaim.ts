export interface InsuranceClaim
{
    ClaimId:number;
    DateOfRequest:Date;
    PolicyNo:number;
    CauseOfLoss:string; 
    DateOfLoss:Date;
    ClaimStatus:boolean;
}