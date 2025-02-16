import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacksService } from '../services/packs.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pack } from '../models/pack';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packs-form',
  imports: [
    FormsModule, CommonModule, ReactiveFormsModule
  ],
  templateUrl: './packs-form.component.html',
  styleUrl: './packs-form.component.css',
})
export class PacksFormComponent {
  packForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private packService: PacksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.packForm = this.fb.group({
      offer_name: [null, [Validators.required]],
      duration_months: [null, [Validators.required]],
      monthly_price: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.packForm.value);

    const request: Pack = {
      offer_name: this.packForm.value.offer_name,
      duration_months: this.packForm.value.duration_months,
      monthly_price: this.packForm.value.monthly_price,
    };

    this.packService.addPack(request).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigateByUrl('/app-dashbord/packs-lists');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
