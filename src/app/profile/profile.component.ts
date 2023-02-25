import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
    this.service.getPatient().subscribe({
        next: (response: any) => {
        this.data = response;
        this.loading = false;
      },
      error: (err:any) => { console.log(err.message )}
    });
  }




}
