import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule } from '@angular/router';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ShareComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ShareComponent,

  ]
})
export class ComponentsModule { }
