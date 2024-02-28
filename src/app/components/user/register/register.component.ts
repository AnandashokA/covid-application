import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
      this.initForm();
      console.log(this.registerForm)
  }

  initForm():void{
    this.registerForm=this.fb.group({
      FirstName: ['', Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-z]+$")],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      terms:[false,Validators.requiredTrue]
    });
  }

  submitRegistrationForm():void{
    if(this.registerForm.valid){
      const formData= this.registerForm.value;
      console.log(formData)
      alert("Valid");
    }else{
      alert("invalid")
    }
  }
  get FirstName() {
    return this.registerForm.get('FirstName');
  }

  get Email() {
    return this.registerForm.get('Email');
  }

  get Password() {
    return this.registerForm.get('Password');
  }

  get ConfirmPassword() {
    return this.registerForm.get('ConfirmPassword');
  }



}
