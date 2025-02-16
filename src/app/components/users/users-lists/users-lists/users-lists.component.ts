import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Observable, tap } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-lists',
  imports: [
    CommonModule
  ],
  templateUrl: './users-lists.component.html',
  styleUrl: './users-lists.component.css'
})
export class UsersListsComponent {

  users: Observable<User[]> | undefined
  
    constructor( private userService: UsersService, private router:Router) { }
  
    loadUsers(): void {
      this.users = this.userService.getAllUsers();
    }
    ngOnInit(): void {
      this.loadUsers();
    }
  

    viewUser(id: number): void {
        this.router.navigate(['/app-dashbord/user-view', id]);
      }
    
      editUser(id: number): void {
        this.router.navigate(['/app-dashbord/user-edit', id]);
      }
    
      deleteUser(id: number): void {
        console.log("hello");
        this.userService.deleteUser(id).pipe(
          tap((response) => {
            this.loadUsers();
          })
        ).subscribe();
      }

}
