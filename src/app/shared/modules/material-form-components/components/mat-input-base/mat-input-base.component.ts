import { Directive, Input, HostBinding } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  FloatLabelType,
  MatFormFieldAppearance,
} from '@angular/material/form-field';
import { DataInputBase, parseValue } from '@webblocksapp/ng-data-groups';

@Directive()
export class MatInputBaseComponent extends DataInputBase {
  @HostBinding() style: string = 'display: block';
  @Input() appearance: MatFormFieldAppearance;
  @Input() color: ThemePalette;
  @Input() floatLabel: FloatLabelType;
  @Input() hideRequiredMarker: boolean;
  @Input() hintLabel: string;

  bindFocusoutEvents(event: any): any {
    this.validateField();
    return event;
  }

  bindInputEvents(event: any): any {
    const value = parseValue(event.target.value);

    this.fillModel(value);
    return event;
  }
}
