import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-viewaverages',
  templateUrl: './viewaverages.component.html',
  styleUrls: ['./viewaverages.component.scss']
})
export class ViewaveragesComponent implements OnInit {

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
    this.service.getAverages().subscribe({
      next: (response: any) => {
        this.data = response;
        this.loading = false;
      },
      error: (err:any) => { console.log(err.message )}
    });
  }


}
