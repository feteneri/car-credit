import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarCreditComponent } from './car-credit/car-credit.component';

const routes: Routes = [
  {
    path: 'car-credit',
    component: CarListComponent,
  },
  {
    path: 'car-credit/car/:id',
    component: CarCreditComponent,
  },
  { path: '**', redirectTo: 'car-credit', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
