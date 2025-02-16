import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pack } from '../models/pack';
import { Observable, tap } from 'rxjs';
import { PacksService } from '../services/packs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packs-lists',
  imports: [
    CommonModule
  ],
  templateUrl: './packs-lists.component.html',
  styleUrl: './packs-lists.component.css'
})
export class PacksListsComponent {

  packs: Observable<Pack[]> | undefined
  
    constructor( private packService: PacksService, private router: Router) { }
  
    loadPacks(): void {
      this.packs = this.packService.getAllPacks();
    }
    ngOnInit(): void {
      this.loadPacks();
    }

     viewPack(id: number): void {
        this.router.navigate(['/app-dashbord/pack-view', id]);
      }
    
      updatePack(id: number): void {
        this.router.navigate(['/app-dashbord/pack-edit', id]);
      }
    
      deletePack(id: number): void {
        console.log("hello");
        this.packService.deletePack(id).pipe(
          tap((response) => {
            this.loadPacks();
          })
        ).subscribe();
      }
    
      subscribePack(id: number): void {
        this.router.navigate(['/app-dashbord/supscriptions-form', { packId: id }]);
      }
    
}
