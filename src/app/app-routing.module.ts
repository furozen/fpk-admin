import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDistributorComponent } from './add-distributor/add-distributor.component';
import { DistributorDetailsComponent } from './distributor-details/distributor-details.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DistributorsComponent
  },
  {
    path: 'add',
    component: AddDistributorComponent
  },
  {
    path: 'details',
    component: DistributorDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
