import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService,private router: Router) {}

  login() {
    localStorage.setItem('token', 'tejashree'); // Store the token
    this.router.navigate(['/home']); // Redirect to protected route
    this.authService.login(this.credentials).subscribe(
      response => {
        // Handle successful login
        localStorage.setItem('token', response.token); // Store the token
        this.router.navigate(['/home']); // Redirect to protected route
      },
      error => {
        // Handle error
      }
    );
  }

  signUp() {
    this.router.navigate(['/signup']); 
  }

}
