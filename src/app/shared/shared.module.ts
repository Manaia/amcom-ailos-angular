
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent, SidebarComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule {
}
