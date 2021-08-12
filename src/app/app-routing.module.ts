import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTextExampleComponent } from './pages/mat-text-example/mat-text-example.component';

const routes: Routes = [
  { path: '', redirectTo: 'mat-text-example', pathMatch: 'full' },
  { path: 'mat-text-example', component: MatTextExampleComponent },
  { path: '**', redirectTo: 'mat-text-example', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
