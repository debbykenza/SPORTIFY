import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers-lists',
  imports: [
    CommonModule
  ],
  templateUrl: './customers-lists.component.html',
  styleUrl: './customers-lists.component.css'
})
export class CustomersListsComponent {

  customers: Observable<Customer[]> | undefined;
  filteredCustomers: Observable<Customer[]> | undefined;

  count! : number;


  constructor( private customerService: CustomersService, private router: Router) { }

  loadCustomers(): void {
    this.customers = this.customerService.getAllCustomers().pipe(
      tap(
        (
          customers
        ) => {
          this.count = customers.filter(customer => customer.active_suscription ).length;
        }
      )
    );

  }
  ngOnInit(): void {
    this.loadCustomers();
  }

  viewCustomer(id: number): void {
    this.router.navigate(['/app-dashbord/customer-view', id]);
  }

  updateCustomer(id: number): void {
    this.router.navigate(['/app-dashbord/customer-edit', id]);
  }

  deleteCustomer(id: number): void {
    console.log("hello");
    this.customerService.deleteCustomer(id).pipe(
      tap((response) => {
        this.loadCustomers();
      })
    ).subscribe();
  }

  onSearch(value: string): void {
    if (this.customers) {
      this.customers = this.customers.pipe(
        map((customers: Customer[]) => customers.filter((customer: Customer) =>
          customer.first_name.toLowerCase().includes(value.toLowerCase()) ||
          customer.last_name.toLowerCase().includes(value.toLowerCase())
        ))
      );
    }
  }

  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.onSearch(inputElement.value);
  }

  subscribeCustomer(id: number): void {
    this.router.navigate(['/app-dashbord/supscriptions-form', { customerId: id }]);
  }


  }

  
