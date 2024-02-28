import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,} from '@angular/core';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
user: any;

  centers:any[] = [];
  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.fetchcenters();
  }

  fetchcenters() {
    this.http.get<any[]>('http://localhost:3600/employees').subscribe(
      (data) => {
        this.centers = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );


  }


}
