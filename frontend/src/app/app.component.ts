import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'frontend';
  emitMenu = false;

  constructor(private authService: AuthService) {}
  
  getEmit(val: boolean) {
    this.emitMenu = val;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();;
  }
}
