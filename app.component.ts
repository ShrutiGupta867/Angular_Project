import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'FormApp1';
  form = new FormGroup({
    fsname: new FormControl(''),
    lsname: new FormControl(''),
    dob:new FormControl(''),
    phone:new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),

  })
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value)
  }
  
}

//,[Validators.required,Validators.minLength(3)]
