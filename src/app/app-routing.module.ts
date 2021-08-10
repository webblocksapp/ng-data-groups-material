import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './pages/example/example.component';

const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  { path: 'example', component: ExampleComponent },
  { path: '**', redirectTo: 'example', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
