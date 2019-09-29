import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddDistributorComponent } from './add-distributor/add-distributor.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorDetailsComponent } from './distributor-details/distributor-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDistributorComponent,
    DistributorsComponent,
    DistributorDetailsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
