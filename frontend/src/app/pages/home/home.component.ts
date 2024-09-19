import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  searchValue: String = '';
  suggestedBanners: any = [];
  hidden: boolean = true;

  constructor(
    private router: Router
  ) { }

  mostSearched() {
    this.router.navigate(['/most-searched']);
  }
  createBanner() {
    this.router.navigate(['/create-banner']);
  }
}
