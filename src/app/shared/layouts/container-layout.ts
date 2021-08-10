import { Component, Input } from '@angular/core';

@Component({
  selector: 'container-layout',
  template: `
    <div>
      <h2>{{ headerText }}</h2>
      <hr />
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        padding: 20px;
        display: block;
      }

      h2 {
        margin-bottom: 0px;
      }

      hr {
        border: 1px solid #e0e0e0;
      }
    `,
  ],
})
export class ContainerLayoutComponent {
  @Input() headerText: string;
}
