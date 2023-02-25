import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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

  createPatient() {
    // console.log(this.createForm.get('name'));
    const data = {
      firstName: this.createForm.get('firstName').value,
      lastName: this.createForm.get('lastName').value,
      dateOfBirth: this.createForm.get('dateOfBirth').value,
      email: this.createForm.get('email').value,
      phoneNumber: this.createForm.get('phoneNumber').value,
      gender: this.createForm.get('gender').value,
      bloodType: this.createForm.get('bloodType').value,
      address: this.createForm.get('address').value,
      city: this.createForm.get('city').value,
      zipCode: this.createForm.get('zipCode').value,
      creationDate: this.createForm.get('creationDate').value
    };

    this.service.postPatient(data).subscribe({
      next: res => this.response = res
    })
  }

  get firstName(){return this.createForm.get('firstName');}
  get lastName(){return this.createForm.get('lastName');}
  get dateOfBirth(){return this.createForm.get('dateOfBirth');}
  get email(){return this.createForm.get('email');}
  get phoneNumber(){return this.createForm.get('phoneNumber');}
  get gender(){return this.createForm.get('gender');}
  get bloodType(){return this.createForm.get('bloodType');}
  get address(){return this.createForm.get('address');}
  get city(){return this.createForm.get('city');}
  get zipCode(){return this.createForm.get('zipCode');}
  get creationDate(){return this.createForm.get('creationDate');}

}
