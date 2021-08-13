import { NgModule } from '@angular/core';
import { MatTextInputModule } from './components/mat-text-input/mat-text-input.module';

@NgModule({
  imports: [MatTextInputModule],
  exports: [MatTextInputModule],
})
export class MaterialFormComponentsModule {}
