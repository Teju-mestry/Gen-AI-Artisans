import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';

@Component({
  selector: 'app-most-searched',
  templateUrl: './most-searched.component.html'
})

export class MostSearchedComponent {
  banners: any;
  showLoader: boolean = true;

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.showLoader = true;

    this.bannerService.getBanners(10).subscribe(data => {
      this.banners = data;
      this.showLoader = false;
     })
  }
}
