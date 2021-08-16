import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTextAreaExampleComponent } from './pages/mat-text-area-example/mat-text-area-example.component';
import { MatTextExampleComponent } from './pages/mat-text-example/mat-text-example.component';

const routes: Routes = [
  { path: '', redirectTo: 'mat-text-example', pathMatch: 'full' },
  { path: 'mat-text-example', component: MatTextExampleComponent },
  { path: 'mat-text-area-example', component: MatTextAreaExampleComponent },
  { path: '**', redirectTo: 'mat-text-example', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
