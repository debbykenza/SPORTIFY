import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  imports: [
    FormsModule,CommonModule,ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

loginForm!: FormGroup;

constructor(private fb: FormBuilder, private authService : AuthService, private router:Router) {}

ngOnInit(): void {
  this.loginForm = this.fb.group({
    username:[ null , [Validators.required]],
    password:[ null , [Validators.required, Validators.minLength(8)]]
  });

}

onSubmit(): void {
  console.log(this.loginForm.value);

  const request = {
    username: this.loginForm.value.username,
    password: this.loginForm.value.password
  };

  this.authService.login(request).subscribe(
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
