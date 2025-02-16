import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // permettre l navigation vers le login
  constructor(private router: Router) {}
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
