import { Component, OnInit, Input } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';

@Component({
  selector: 'app-latest-banners',
  templateUrl: './latest-banners.component.html'
})

export class LatestBannersComponent implements OnInit {
  banners: any;
  name: string = '';
  showLoader: boolean = true;

  @Input() limit = 1

  constructor(private bannerService:BannerService) { }

  ngOnInit(): void {
    this.showLoader = true;

    this.bannerService.getBanners(this.limit).subscribe(data=>{
        this.banners = data;
        this.showLoader = false;
    })
  }
}
