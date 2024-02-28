import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // standalone: true,
  styleUrl: './login.component.css',
  // imports:[FormsModule,HttpClientModule],
})
export class LoginComponent implements OnInit {


  constructor(private http:HttpClient){

  }
  
  ngOnInit(): void {
  }
}
// export class Login{

//   password :string;
//   name: string;
//   constructor(){
//     this.name = '';
//     this.password = '';
//   }
//   //   loginForm = new FormGroup({
//   //   Name: new FormControl(""),
//   //   Email:new FormControl(""),
//   //   Password:new FormControl("")
//   // })

//   // submitLoginForm(){
//   //   console.log(this.loginForm)
//   // }

//   // get Name():FormControl{
//   //   return this.loginForm.get("Name") as FormControl;
//   // }
//   // get Email():FormControl{
//   //   return this.loginForm.get("Email") as FormControl;
//   // }
//   // get Password():FormControl{
//   //   return this.loginForm.get("Password") as FormControl;
//   // }

// }

