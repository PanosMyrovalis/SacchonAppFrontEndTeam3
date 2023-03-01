import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-viewmeasurement',
  templateUrl: './viewmeasurement.component.html',
  styleUrls: ['./viewmeasurement.component.scss']
})
export class ViewmeasurementComponent implements OnInit {

  data: any;
  loading = false;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    // this.service.get().subscribe({
    //   next: response => this.data = response
    // });
  }


  getData() {
    this.loading = true;
    this.service.getMeasurements().subscribe({
        next: (response: any) => {
        this.data = response;
        this.loading = false;
      },
      error: (err:any) => { console.log(err.message )}
    });
  }




}
