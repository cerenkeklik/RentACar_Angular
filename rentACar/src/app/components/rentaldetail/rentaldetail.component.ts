import { Component, OnInit } from '@angular/core';
import { Rentaldetail } from 'src/app/models/rentaldetail';
import { RentaldetailService } from 'src/app/services/rentaldetail.service';

@Component({
  selector: 'app-rentaldetail',
  templateUrl: './rentaldetail.component.html',
  styleUrls: ['./rentaldetail.component.css']
})
export class RentaldetailComponent implements OnInit {
  rentaldetails:Rentaldetail[]=[];
  constructor(private rentalService:RentaldetailService) { }

  ngOnInit(): void {
   this.getRentaldetails();
  }
  
  getRentaldetails(){
  this.rentalService.getRentalDetails().subscribe(response =>{
    this.rentaldetails = response.data;
  })
  }

}
