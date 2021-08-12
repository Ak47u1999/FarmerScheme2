import { Component, OnInit } from '@angular/core';
import { MarketplaceCrops } from 'src/models/MarketplaceCrops';
import { MarketPlaceTransactions } from 'src/models/MarketPlaceTransactions';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-bidderwelcomepage',
  templateUrl: './bidderwelcomepage.component.html',
  styleUrls: ['./bidderwelcomepage.component.css']
})
export class BidderwelcomepageComponent implements OnInit {
  crops:MarketplaceCrops[]=[];
  currentbid:MarketPlaceTransactions[]=[];

  constructor(public service :CrudService) { }

  ngOnInit(): void {
   
    this.service.fetchcroptype().subscribe((data: MarketplaceCrops[])=>{
        console.log(data)
        this.crops = data;}); 
  
  this.service.fetchcurrentbid().subscribe((data: MarketPlaceTransactions[])=>{
    console.log(data)
    this.currentbid = data;}); 
}

}
