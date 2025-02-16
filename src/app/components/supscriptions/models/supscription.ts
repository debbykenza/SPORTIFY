import { LocalDate } from '@js-joda/core';
import { Customer } from '../../customers/models/customer';
import { Pack } from '../../packs/models/pack';

export class Supscription {
  
 constructor(
    public customer: Customer,
    public customer_id: number,
    public pack: Pack,
    public pack_id: number,
    public start_date: LocalDate,
    public id?: number,
 ){

 }
}