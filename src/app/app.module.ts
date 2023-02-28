import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SerComponent } from './ser/ser.component';
import { StatsComponent } from './stats/stats.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewmeasurementComponent } from './viewmeasurement/viewmeasurement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddmeasurementComponent } from './addmeasurement/addmeasurement.component';
import { ViewaveragesComponent } from './viewaverages/viewaverages.component';
import { ViewconsultationsComponent } from './viewconsultations/viewconsultations.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SerComponent,
    StatsComponent,
    LoginComponent,

    SignupComponent,

    ViewmeasurementComponent,
     DashboardComponent,
     ProfileComponent,
     AddmeasurementComponent,
     ViewaveragesComponent,
     ViewconsultationsComponent,
     SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
