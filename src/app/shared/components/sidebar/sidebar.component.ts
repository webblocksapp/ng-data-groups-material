import { Component } from '@angular/core';
import { Route } from '../../types';

@Component({
  selector: 'sidebar',
  template: `
    <ng-container *ngFor="let route of routes">
      <button mat-button [routerLink]="route.path">{{ route.label }}</button>
    </ng-container>
  `,
  styles: [
    `
      button {
        width: 100%;
      }
    `,
  ],
})
export class SidebarComponent {
  public routes: Route[] = [
    { path: 'mat-text-example', label: 'Mat Text Example' },
  ];
}
