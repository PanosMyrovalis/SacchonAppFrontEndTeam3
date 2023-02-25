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
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      dateofbirth: ['', [Validators.required]],
    });
  }

  createPatient() {
    // console.log(this.createForm.get('name'));
    const data = {
      email: this.createForm.get('email').value,
      password: this.createForm.get('password').value,
      firstname: this.createForm.get('firstname').value,
      lastname: this.createForm.get('lastname').value,
      address: this.createForm.get('address').value,
      dateofbirth: this.createForm.get('dateofbirth').value
    };

    this.service.postPatient(data).subscribe({
      next: res => this.response = res
    })
  }

  get email(){
    return this.createForm.get('email');
  }

  get password(){
    return this.createForm.get('password');
  }

  get firstname(){
    return this.createForm.get('firstname');
  }

  get lastname(){
    return this.createForm.get('lastname');
  }

  get address(){
    return this.createForm.get('address');
  }

  get dateofbirth(){
    return this.createForm.get('dateofbirth');
  }

}
