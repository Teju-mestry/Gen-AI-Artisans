import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'project-list',
    loadChildren: () => import('./pages/project-list/project-list.module').then((m) => m.ProjectListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'most-searched',
    loadChildren: () => import('./pages/most-searched/most-searched.module').then((m) => m.MostSearchedPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'banners/:id',
    loadChildren: () => import('./pages/banners/banners.module').then((m) => m.BannersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-banner',
    loadChildren: () => import('./pages/create-banner/create-banner.module').then((m) => m.CreateBannerModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
