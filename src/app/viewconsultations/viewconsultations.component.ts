import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-viewconsultations',
  templateUrl: './viewconsultations.component.html',
  styleUrls: ['./viewconsultations.component.scss']
})
export class ViewconsultationsComponent implements OnInit {


  data: any;
  loading = false;
items: any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    // this.service.get().subscribe({
    //   next: response => this.data = response
    // });
  }

  getData() {
    this.loading = true;
    this.service.getConsultations().subscribe({
      next: (response: any) => {
        this.data = response;
        this.loading = false;
      },
      error: (err:any) => { console.log(err.message )}
    });
  }


}
