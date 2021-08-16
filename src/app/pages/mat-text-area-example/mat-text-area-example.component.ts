import { Component } from '@angular/core';
import { BaseModel, SubmitEvent } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'mat-text-area-example',
  template: `
    <container-layout headerText="Mat Text Area Example">
      <data-groups [model]="exampleModel" (submitEvent)="submit($event)">
        <data-group>
          <mat-text-area
            #dataInput
            label="Description"
            name="description"
            placeholder="Write your description..."
            [matAutosizeMinRows]="3"
            [matAutosizeMaxRows]="5"
          ></mat-text-area>
          <mat-text-area
            #dataInput
            label="Thoughts"
            name="thoughts"
            placeholder="Write your thinkings also..."
          ></mat-text-area>
          <mat-text-area
            #dataInput
            label="Opinions"
            name="opinions"
            placeholder="Write your opinions also..."
          ></mat-text-area>
        </data-group>
        <button type="submit" mat-raised-button color="primary">Send</button>
      </data-groups>
    </container-layout>
  `,
  styles: [
    `
      :host ::ng-deep mat-text-area {
        margin-bottom: 17px;
      }
    `,
  ],
})
export class MatTextAreaExampleComponent {
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
