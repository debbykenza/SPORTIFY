import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Customer } from '../../customers/models/customer';
import { CustomersService } from '../../customers/services/customers.service';
// import {ngIF} // This line is incorrect and should be removed or corrected

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit{

   filteredCustomers: Observable<Customer[]> | undefined;
 
   count : number | null = null;
   totalCustomers: number | null = null;

 
 
   constructor( private customerService: CustomersService, private router: Router) { }
 
   loadCustomers(): void {
     this.customerService.getAllCustomers().pipe(
       tap(
         (
           customers
         ) => {
           this.count = customers.filter(customer => customer.active_suscription ).length;
           this.totalCustomers = customers.length;

           console.log(this.count);
         }
       )
     ).subscribe();
 
   }
   ngOnInit(): void {
     this.loadCustomers();
   }

}
