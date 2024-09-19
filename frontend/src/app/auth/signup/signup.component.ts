import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService,private router: Router) {}

  signup() {
    this.router.navigate(['/login']); 
    this.authService.signup(this.user).subscribe(
      response => {
        // Handle successful signup
      },
      error => {
        // Handle error
      }
    );
  }
}
