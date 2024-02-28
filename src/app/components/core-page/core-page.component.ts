import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.css']
})
export class CorePageComponent {
  employeeForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      centerID: ['', Validators.required],
      centerLocality: ['', Validators.required],
      boothno: ['', Validators.required],
      slots: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.http.post<any>('http://localhost:3600/employees', this.employeeForm.value)
        .subscribe(
          response => {
            console.log('Data posted successfully:', response);
            this.employeeForm.reset();
          },
          error => {
            console.error('Error posting data:', error);
          }
        );
    }
  }
}
