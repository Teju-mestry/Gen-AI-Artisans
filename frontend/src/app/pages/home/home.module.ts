import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home.routing.module';

import { HomeComponent } from './home.component';

import { LatestBannersModule } from 'src/app/components/latest-banners/latest-banners.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LatestBannersModule,
    LoaderModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomePageModule {}
