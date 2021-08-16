import { Component, Input } from '@angular/core';
import { MatInputBaseComponent } from '../mat-input-base/mat-input-base.component';

@Component({
  selector: 'mat-text-area',
  template: `
    <mat-form-field
      [appearance]="appearance"
      [color]="color"
      [floatLabel]="floatLabel"
      [hideRequiredMarker]="hideRequiredMarker"
      [hintLabel]="hintLabel"
    >
      <mat-label [ngClass]="{ 'mat-error': isInvalid }">{{ label }}</mat-label>
      <textarea
        matInput
        [matTextareaAutosize]="matTextareaAutosize"
        [matAutosizeMaxRows]="matAutosizeMaxRows"
        [matAutosizeMinRows]="matAutosizeMinRows"
        [id]="id + '-mat-text-area'"
        [type]="type"
        [name]="name"
        [value]="value"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [readonly]="readonly"
        [attr.autocomplete]="autocomplete ? 'on' : 'off'"
        (focusout)="focusout($event)"
        (input)="input($event)"
        style="resize: {{ resize ? 'vertical' : 'none' }}"
      ></textarea>
    </mat-form-field>
    <div class="feedback-zone">
      <small class="mat-hint">{{ help }}</small>
      <small class="mat-error" *ngIf="isInvalid">
        {{ error }}
      </small>
    </div>
  `,
  styles: [
    `
      :host .feedback-zone {
        margin-top: -1.2em;
      }

      :host ::ng-deep mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class MatTextAreaComponent extends MatInputBaseComponent {
  @Input() matAutosizeMaxRows: number;
  @Input() matAutosizeMinRows: number;
  @Input() matTextareaAutosize: boolean = true;
  @Input() resize: boolean = false;
}
