import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestBannersComponent } from './latest-banners.component';

import { RouterModule } from '@angular/router';

import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    LatestBannersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoaderModule
  ],
  exports: [
    LatestBannersComponent
  ]
})
export class LatestBannersModule { }
