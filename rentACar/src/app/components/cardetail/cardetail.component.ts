import { Component, OnInit } from '@angular/core';
import { Cardetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  cardetails : Cardetail[] = [];

  constructor(private cardetailService:CardetailService) { }

  ngOnInit(): void {
   this.getCardetails();
  }

  getCardetails(){
   this.cardetailService.getCardetails().subscribe((response) => {
     console.log(response);
     this.cardetails = response.data;
   })
  }
}
