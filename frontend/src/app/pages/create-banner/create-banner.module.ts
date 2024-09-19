import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBannerRoutingModule } from './create-banner.routing.module';
import { CreateBannerComponent } from './create-banner.component';


@NgModule({
  declarations: [
    CreateBannerComponent
  ],
  imports: [
    CommonModule,
    CreateBannerRoutingModule
  ],
  exports: [
    CreateBannerComponent
  ]
})
export class CreateBannerModule { }
