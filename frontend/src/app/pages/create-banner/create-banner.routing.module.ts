import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBannerComponent } from './create-banner.component';

const routes: Routes = [
  {
    path: '',
    component: CreateBannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBannerRoutingModule { }
