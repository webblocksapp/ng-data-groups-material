import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatTextExampleComponent } from './pages/mat-text-example/mat-text-example.component';
import { MaterialFormComponentsModule } from './shared/modules/material-form-components/material-form-components.module';
import { NgDataGroupsModule } from '@webblocksapp/ng-data-groups';
import { MatTextAreaExampleComponent } from './pages/mat-text-area-example/mat-text-area-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MatTextExampleComponent,
    MatTextAreaExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialFormComponentsModule,
    NgDataGroupsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
