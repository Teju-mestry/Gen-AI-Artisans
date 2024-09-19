import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannersComponent } from './banners.component';
import { BannersPageRoutingModule } from './banners.routing.module';


import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    BannersComponent,
  ],
  imports: [
    CommonModule,
    BannersPageRoutingModule,
    SwiperModule, 
    ComponentsModule ]
})

export class BannersModule { }
