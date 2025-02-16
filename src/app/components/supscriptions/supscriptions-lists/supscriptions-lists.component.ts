import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Supscription } from '../models/supscription';
import { SupscriptionsService } from '../services/supscriptions.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supscriptions-lists',
  imports: [
    CommonModule,
  ],
  templateUrl: './supscriptions-lists.component.html',
  styleUrl: './supscriptions-lists.component.css'
})
export class SupscriptionsListsComponent {
  supscriptions: Observable<Supscription[]> | undefined
  
    constructor( private supscriptionService: SupscriptionsService, private router: Router) { }
  
    loadSupscriptions(): void {
      this.supscriptions = this.supscriptionService.getAllSupscriptions();
    }
    ngOnInit(): void {
      this.loadSupscriptions();
    }
  
    viewSupscriptions(id: number): void {
      this.router.navigate(['/app-dashbord/supscription-view', id]);
    }
  
    editSupscription(id: number): void {
      this.router.navigate(['/app-dashbord/supscription-edit', id]);
    }
  
    deleteSupscription(id: number): void {
      this.supscriptionService.deleteSupscription(id).subscribe(
        () => {
          this.loadSupscriptions(); 
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  
    subscribeSupscription(id: number): void {
      this.router.navigate(['/app-dashbord/supscriptions-form', { customerId: id }]);
    }
}
