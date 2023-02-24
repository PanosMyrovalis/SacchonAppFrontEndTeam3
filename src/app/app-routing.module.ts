import { ViewconsultationsComponent } from './viewconsultations/viewconsultations.component';
import { ViewaveragesComponent } from './viewaverages/viewaverages.component';
import { AddmeasurementComponent } from './addmeasurement/addmeasurement.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewmeasurementComponent } from './viewmeasurement/viewmeasurement.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'viewmeasurements', component: ViewmeasurementComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'addmeasurement', component: AddmeasurementComponent},
  { path: 'viewaverages', component: ViewaveragesComponent},
  { path: 'viewconsultations', component: ViewconsultationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
