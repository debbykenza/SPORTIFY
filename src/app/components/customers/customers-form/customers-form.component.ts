import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomersService } from '../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer';
import { DashbordComponent } from "../../dashbord/dashbord.component";
import { map, Observable, tap } from 'rxjs';
import { signalUpdateFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-customers-form',
  imports: [
    FormsModule, CommonModule, ReactiveFormsModule
],
  templateUrl: './customers-form.component.html',
  styleUrl: './customers-form.component.css'
})
export class CustomersFormComponent {

  customerForm!: FormGroup;

  // var modification
  customer!: Customer;
  customerId?:number;
  
  constructor(
      private fb: FormBuilder,
      private customerService: CustomersService,
      private router: Router,
      private route: ActivatedRoute,
    ) {}
  
  ngOnInit(): void {

    this.customerForm = this.fb.group({
      first_name:['' , [Validators.required]],
      last_name:['' , [Validators.required]],
      registration_date:[new Date() , [Validators.required]],
      phone_number:['' , [Validators.required]],
    });

      const customerId : string | null = this.route.snapshot.paramMap.get('customerId');

      if (customerId) {
        console.log(customerId);
        this.customerId = Number(customerId);
        this.customerService.getCustomerById(this.customerId).pipe(
          map((response) =>{
            console.log(response);
            this.customerForm = this.fb.group({
              first_name:[response.first_name || '' , [Validators.required]],
              last_name:[response.last_name || '' , [Validators.required]],
              registration_date:[response.registration_date || new Date() , [Validators.required]],
              phone_number:[response.phone_number || '' , [Validators.required]],
            });
            // this.customer = response;
          } ) 
        ).subscribe();
      }
    
  }

  onSubmit(): void {

    console.log(this.customerForm.value);
  
    const request:Customer = {
      first_name: this.customerForm.value.first_name,
      last_name: this.customerForm.value.last_name,
      registration_date: this.customerForm.value.registration_date,
      phone_number: this.customerForm.value.phone_number
    };
  
    if (this.customerId){
      const request : Customer = {
        ...this.customerForm.value,
      }

      this.customerService.updateCustomer(this.customerId, request).pipe(
        tap(() => {
          console.log("customer mis à jour avec succès");
          this.router.navigateByUrl('/app-dashbord/customers-lists');
        })
      ).subscribe();
      
    }else{
      this.customerService.addCustomer(request).subscribe(
  
        (response : any) => {
          console.log(response);
          this.router.navigateByUrl('/app-dashbord/customers-lists');
        },
        (error : any) => {
          console.log(error);
        }
      )
    }
    
  }

}


