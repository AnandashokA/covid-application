import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bookingForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      name: ['', Validators.required],
      locality: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      slot_timing: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {

      this.http.post<any>('http://localhost:3600/submit-form', this.bookingForm.value)
        .subscribe(
          response => {
            console.log('Data posted successfully:', response);
            this.bookingForm.reset();
          },
          (erro) => {
            console.error('Error posting data:');
          }
        );
        alert("You have booked a slot")
    }
    
    else {
      console.error('Form is not valid');
    }
  }
  async send(){
    emailjs.init("IOfZ8uNJHtpYOroDd")
    let response =await emailjs.send("service_p5hycud","template_5kb5t2r",{
    Anand:"Anand" ,
    to_name: this.bookingForm.value.name,
    from_name: this.bookingForm.value.email,
    message: "your slot is booked successfully,",
    });
    alert("Message send to the email check it out")
  }

}
