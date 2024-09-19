import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BannerService } from 'src/app/services/banner/banner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  @Output() offsetMenuEvent: EventEmitter<boolean> = new EventEmitter();
  offsetMenu = true;

  enteredSearchValue: String = '';
  showSuggested: boolean = false;
  showResults: boolean = false;
  suggestedBanners: any = [];

  constructor(
    private bannerService: BannerService, 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onMenu(val: boolean) {
    this.offsetMenuEvent.emit(val);
    this.offsetMenu = !this.offsetMenu;
  }

  closeSearch() {
    this.showResults = false;
    this.enteredSearchValue = '';
    this.suggestedBanners = [];
  }

  outSearch() {
    setTimeout(() => {
      this.closeSearch();
    }, 200)
  }

  onSearchChange() {
    if (this.enteredSearchValue !== '') {
      this.showResults = true;

      this.bannerService.searchByBannerName(this.enteredSearchValue).subscribe(data => {
        this.suggestedBanners = data;

        if (this.suggestedBanners.length > 0) {
          this.showSuggested = true;
        } else {
          this.suggestedBanners = [];
          this.showSuggested = false;
        }
      })
    } else {
      this.showResults = false;
      this.suggestedBanners = [];
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login page
  }
}
