import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SupscriptionsService } from '../services/supscriptions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Supscription } from '../models/supscription';
import { Observable, tap } from 'rxjs';
import { Pack } from '../../packs/models/pack';
import { PacksService } from '../../packs/services/packs.service';
import { LocalDate } from '@js-joda/core';

@Component({
  selector: 'app-supscriptions-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './supscriptions-form.component.html',
  styleUrl: './supscriptions-form.component.css',
})
export class SupscriptionsFormComponent {
  supscriptionForm!: FormGroup;
  customerId: number | undefined;
  packs: Observable<Pack[]> | undefined;

  constructor(
    private fb: FormBuilder,
    private supscriptionService: SupscriptionsService,
    private router: Router,
    private route: ActivatedRoute,
    private packService: PacksService
  ) {}

  loadPacks(): void {
    this.packService.getAllPacks().subscribe((data) => {
      this.packs = this.packService.getAllPacks();
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.loadPacks();

    this.supscriptionForm = this.fb.group({
      customer_id: [null, [Validators.required]],
      pack_id: [null, [Validators.required]],
      start_date: [null, [Validators.required]],
    });

    this.route.paramMap.subscribe((params) => {
      const customerId = params.get('customerId');
      if (customerId) {
        this.customerId = +customerId;
        this.supscriptionForm.patchValue({ customer_id: this.customerId });
      }
    });
  }

  onSubmit(): void {
    const request: Supscription = this.supscriptionForm.value;
    console.log( request)

    if(this.supscriptionForm.valid){
      const supscription =  {
        customer: {
          id: this.customerId,
         
        },
        pack: {
          id: request.pack_id,
          
        },

        start_date: request.start_date,
       
      }
        console.log(supscription)
        this.supscriptionService.addSupscription(supscription).subscribe(
          (response: any) => {
            console.log(response);
            this.router.navigateByUrl('/app-dashbord/supscriptions-lists');
          },
          (error: any) => {
            console.log(error);
          }
        )

      }
    }
   
  }

