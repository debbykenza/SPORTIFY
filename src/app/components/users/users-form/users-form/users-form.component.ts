import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Role } from '../../models/role';

@Component({
  selector: 'app-users-form',
  imports: [
        FormsModule,CommonModule,ReactiveFormsModule
    
  ],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {
 
  userForm!: FormGroup;
  roles = Object.values(Role);
    constructor(private fb: FormBuilder, private userService : UsersService, private router:Router) {}
  
    ngOnInit(): void {
      this.userForm = this.fb.group({
        first_name:[ null , [Validators.required]],
        last_name:[ null , [Validators.required]],
        username:[ null , [Validators.required]],
        password:[ null , [Validators.required]],
        role:[ null , [Validators.required]],
      });
    }
  
    onSubmit(): void {
      console.log(this.userForm.value);
    
      const request:User = {
        first_name: this.userForm.value.first_name,
        last_name: this.userForm.value.last_name,
        username: this.userForm.value.username,
        password: this.userForm.value.password,
        role: this.userForm.value.role
      };
    
      this.userService.addUser(request).subscribe(
        (response : any) => {
          console.log(response);
          this.router.navigateByUrl('users-lists');
        },
        (error : any) => {
          console.log(error);
        }
      )
    }
}
