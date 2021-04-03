import { Rentaldetail } from "./rentaldetail";
import { ResponseModel } from "./responseModel";

export interface RentaldetailResponseModel extends ResponseModel{
    data:Rentaldetail[];
}