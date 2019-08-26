import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarCreditComponent } from './car-credit/car-credit.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CarListComponent,
  },
  {
    path: 'car/:id',
    component: CarCreditComponent,
  },
  { path: '**', redirectTo: 'catalog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
