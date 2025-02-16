// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomersService {

//   private apiUrl: string = 'http://localhost:8080/customers';
//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environments/environment';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private apiUrl: string = environment.apiUrl;
  private baseUrl: string = `${this.apiUrl}/admin/customers`;

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/`);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/add`, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/admin/customers/delete/${id}`);
  }

  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put(`http://localhost:8080/admin/customers/update/${id}`, customer);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}