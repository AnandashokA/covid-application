import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  AdminloginForm = new FormGroup({
    Name: new FormControl(""),
    Email:new FormControl(""),
    Password:new FormControl("")
  })

  submitadminLoginForm(){
    console.log(this.AdminloginForm)
  }

  get Name():FormControl{
    return this.AdminloginForm.get("Name") as FormControl;
  }
  get Email():FormControl{
    return this.AdminloginForm.get("Email") as FormControl;
  }
  get Password():FormControl{
    return this.AdminloginForm.get("Password") as FormControl;
  }

}

