import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectListPageRoutingModule } from './project-list.routing.module';

import { ProjectListComponent } from './project-list.component';
import { LatestBannersModule } from 'src/app/components/latest-banners/latest-banners.module';

@NgModule({
  declarations: [
    ProjectListComponent,
  ],
  imports: [
    CommonModule,
    LatestBannersModule,
    ProjectListPageRoutingModule
  ]
})

export class ProjectListPageModule {}

