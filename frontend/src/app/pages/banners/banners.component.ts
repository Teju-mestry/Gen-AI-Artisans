import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BannerService } from 'src/app/services/banner/banner.service';

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html'
})

export class BannersComponent implements OnInit {
  banner: any;
  image: string = '';
  colors: any = [{color : '#e8e8e8'},{color : '#f0e1d1'},{color : '#e9b26e'},{color : '#26436c'},{color : '#0e1a27'}];
  bannerimages: any;
  showLoader: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private bannerService: BannerService
  ) { }

  ngOnInit(): void {
    this.banner = {
      name: ''
    }

    let id  = this.route.snapshot.params['id'];
    //Get Banners
    this.showLoader = true;
    this.bannerService.getBanner(id).subscribe( data => {
    this.banner = data;
    console.log(data)

    this.bannerService.getImage(data.reference_image_id).subscribe( data =>{
      this.image = data.url;
      })
    })

    //Get Banner Images
    this.bannerService.getBannerImages(id).subscribe(data => {
      this.bannerimages = data;

      this.showLoader = false;
    })
  }

  editBanner(){

  }

  deleteBanner(){
    
  }
}
