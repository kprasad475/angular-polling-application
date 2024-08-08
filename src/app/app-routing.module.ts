import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollingComponent } from './polling/polling.component';

const routes: Routes = [
  { path: '', redirectTo: '/polling', pathMatch: 'full' }, // Redirect to post list
  { path: 'polling', component: PollingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
