import { Component } from '@angular/core';
import { BaseModel, SubmitEvent } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'mat-text-example',
  template: `
    <container-layout headerText="Mat Text Example">
      <data-groups
        [model]="exampleModel"
        [autocomplete]="false"
        (submitEvent)="submit($event)"
      >
        <data-group>
          <mat-text-input
            #dataInput
            label="Email"
            name="email"
            help="test@email.com"
          ></mat-text-input>
          <mat-text-input #dataInput label="Name" name="name"></mat-text-input>
        </data-group>
        <button type="submit" mat-raised-button color="primary">Send</button>
      </data-groups>
    </container-layout>
  `,
  styles: [
    `
      :host ::ng-deep mat-text-input {
        margin-bottom: 17px;
      }
    `,
  ],
})
export class MatTextExampleComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);

  public submit(event: SubmitEvent) {
    event.then((validationResult) => {
      const { isValid, validatedData } = validationResult;

      if (isValid) {
        alert(JSON.stringify(validatedData));
      } else {
        alert('Form contains errors');
      }
    });
  }
}
