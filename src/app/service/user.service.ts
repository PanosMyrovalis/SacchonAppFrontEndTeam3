import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: any;

  constructor(private hhtp: HttpClient) { }



  getPatient() {
    return this.http.get('http://localhost:4200/profile');
  }

  getMeasurements() {
    return this.http.get('http://localhost:4200/profile');
  }

  getConsultations() {
    return this.http.get('http://localhost:4200/profile');
  }

  getAverages() {
    return this.http.get('http://localhost:4200/profile');
  }




  postPatient(data: any) {
    const url = 'http://http://localhost:9000/measurement';

    const headers = new HttpHeaders()
      .set('content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.hhtp.post(url, JSON.stringify(data), { headers: headers });
  }

  postMeasurement(data: any) {
    const url = 'http://http://localhost:9000/measurement';

    const headers = new HttpHeaders()
      .set('content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.hhtp.post(url, JSON.stringify(data), { headers: headers });
  }




}





 //const data = {
      // "name": "morpheus",
      //  "job": "leader"
      // }
