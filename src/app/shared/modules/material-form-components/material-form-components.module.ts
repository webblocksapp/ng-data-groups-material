import { NgModule } from '@angular/core';
import { MatTextAreaModule } from './components/mat-text-area/mat-text-area.module';
import { MatTextInputModule } from './components/mat-text-input/mat-text-input.module';

@NgModule({
  imports: [MatTextInputModule, MatTextAreaModule],
  exports: [MatTextInputModule, MatTextAreaModule],
})
export class MaterialFormComponentsModule {}
