import { ProfileComponent } from './../profile/profile.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http:HttpClient) { }



  getPatient() {
    return this.http.get('http://localhost:9000/Patient/3');
  }

  getMeasurements() {
    return this.http.get('http://localhost:9000/Measurements/2');
  }

  getConsultations() {
    return this.http.get('http://localhost:9000/Consultations/2');
  }

  getAverages() {
    return this.http.get('http://localhost:9000/PatientAverageMeasurements/1');
  }




  postPatient(data: any) {
    const url = 'http://localhost:9000/PatientCreate';

    const headers = new HttpHeaders()
      .set('content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.http.post(url, JSON.stringify(data), { headers: headers });
  }

  postMeasurement(data: any) {
    const url = 'http:localhost:9000/StoreMeasurement';

    const headers = new HttpHeaders()
      .set('content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.http.post(url, JSON.stringify(data), { headers: headers });
  }




}





 //const data = {
      // "name": "morpheus",
      //  "job": "leader"
      // }
