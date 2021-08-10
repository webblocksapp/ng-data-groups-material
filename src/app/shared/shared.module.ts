import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { ContainerLayoutComponent } from './layouts/container-layout';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    MainLayoutComponent,
    ContainerLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    MainLayoutComponent,
    ContainerLayoutComponent,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class SharedModule {}
