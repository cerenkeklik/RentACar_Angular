import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentaldetailResponseModel } from '../models/rentaldetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {
  apiUrl="https://localhost:44383/api/rentals/getrentaldetails";
  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<RentaldetailResponseModel>{
   return this.httpClient.get<RentaldetailResponseModel>(this.apiUrl);
  }
}
