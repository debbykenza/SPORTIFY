import { LocalDate } from "@js-joda/core";

export class Pack {
   constructor(
    public offer_name: string,
    public duration_months: number,
    public monthly_price: number,
    public id?: number,

   ){
    
   }
  }

