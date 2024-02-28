import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrl: './register2.component.css'
})
export class Register2Component implements OnInit {
  backgroundChanged: boolean = false;
  name: any;
  email:any;
  password:any;

  constructor(private http:HttpClient){}

  registerForm = new FormGroup({
    FirstName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    LastName:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    Email:new FormControl("",[Validators.required,Validators.email]),
    Number:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    Gender:new FormControl(""),
    pwd:new FormControl(""),
    rpwd:new FormControl(""),

  })
  ngOnInit(): void {
  }

  registerUser() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000/register', userData).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );

    console.log(this.registerForm);
    }
    get FirstName():FormControl{
      return this.registerForm.get("FirstName") as FormControl;
    }
    get LastName():FormControl{
      return this.registerForm.get("LastName") as FormControl;
    }
    get Email():FormControl{
      return this.registerForm.get("Email") as FormControl;
    }
    get Number():FormControl{
      return this.registerForm.get("Number") as FormControl;
    }
    get Gender():FormControl{
      return this.registerForm.get("Gender") as FormControl;
    }
    get pwd():FormControl{
      return this.registerForm.get("pwd") as FormControl;
    }


  // focusInput(){
  //   document.getElementById('firstname').style.backgroundColor = 'yellow';
  // }
  changeBackground() {
    this.backgroundChanged = true;
  }
}
