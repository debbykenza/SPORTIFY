
import { LocalDate } from '@js-joda/core';

export class Customer {
   constructor(
    public first_name: string,
    public last_name: string,
    public phone_number: string,
    public active_suscription?: boolean,
    public registration_date?: LocalDate,
    public id?: number,

   ){
    
   }
  }