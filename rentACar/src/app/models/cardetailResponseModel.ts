import { Cardetail } from "./cardetail";
import { ResponseModel } from "./responseModel";

export interface cardetailResponseModel extends ResponseModel{
data:Cardetail[];
}