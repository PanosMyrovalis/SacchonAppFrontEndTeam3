import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addmeasurement',
  templateUrl: './addmeasurement.component.html',
  styleUrls: ['./addmeasurement.component.scss']
})
export class AddmeasurementComponent implements OnInit {

  response: any;

  createForm: any;

  // data = {
  //   name: "maria",
  //   job: "manager"
  // }

  constructor(private service: UserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.service.post(this.data).subscribe({
    //   next: data => this.response =  data
    // })

    this.createForm = this.fb.group({
      firstName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      bloodType: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      creationDate: ['', [Validators.required]],
    });
  }

  createMeasurement() {
    // console.log(this.createForm.get('name'));
    const data = {
      glucose: this.createForm.get('glucose').value,
      carb: this.createForm.get('carb').value,
      measurement_date: this.createForm.get('measurement_date').value,
    };

    this.service.postMeasurement(data).subscribe({
      next: res => this.response = res
    })
  }

  get glucose(){return this.createForm.get('glucose');}
  get carb(){return this.createForm.get('carb');}
  get measurement_date(){return this.createForm.get('measurement_date');}


}
{

}
