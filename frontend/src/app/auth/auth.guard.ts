import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn(); // Implement this method in your AuthService

    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
    return true;
  }
}
