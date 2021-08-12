import { Component } from '@angular/core';

@Component({
  selector: 'main-layout',
  template: `
    <toolbar></toolbar>
    <mat-sidenav-container>
      <mat-drawer-container>
        <mat-drawer mode="side" opened>
          <sidebar></sidebar>
        </mat-drawer>
        <mat-drawer-content>
          <ng-content></ng-content>
        </mat-drawer-content>
      </mat-drawer-container>
    </mat-sidenav-container>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-areas: 'toolbar' 'container';
        height: 100%;
      }

      :host ::ng-deep toolbar {
        grid-area: toolbar;
      }

      :host ::ng-deep mat-drawer {
        width: 100%;
        max-width: 180px;
      }

      :host ::ng-deep mat-sidenav-container {
        grid-area: container;
      }

      :host ::ng-deep mat-drawer-container {
        height: 100%;
      }
    `,
  ],
})
export class MainLayoutComponent {}
