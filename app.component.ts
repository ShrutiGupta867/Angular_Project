import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  public formData : any ;
  constructor(){}
  
  ngOnInit(): void {
    this.formData = new FormGroup({
      fsname: new FormControl(''),
      lsname: new FormControl(''),
      dob:new FormControl(''),
      phone:new FormControl(''),
      address: new FormControl(''),
      email: new FormControl('')
    })
  }
  get f(){
        return this.formData.controls;
  }
    
  onClickSubmit(){
        console.log(this.formData.value);
       // debugger;
  } 
} 










