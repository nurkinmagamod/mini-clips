import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
    ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)
  ])
  confirm_password = new FormControl('')
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(14),
    Validators.minLength(14)
  ])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  })

  showAlert = false;
  alertMessage = 'Please wait! Your account is being created.'
  alertColor = 'blue'

  register() {
    this.showAlert = true
    this.alertMessage = 'Please wait! Your account is being created.'
    this.alertColor = 'blue'
  }

}
