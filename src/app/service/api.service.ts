import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // reset() {
  //   throw new Error('Method not implemented.');
  // }

  private baseurl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  addEmployee(employeeData:any): Observable<any>{
    return this.http.post(`${this.baseurl}/employees`,employeeData);
  }
}
// emailjs.send("service_p5hycud","template_5kb5t2r",{
//   Anand: "anand",
//   to_name: "test",
//   from_name: "anandashok2004@gmail.com",
//   message: "hi hoow are you",
//   });
