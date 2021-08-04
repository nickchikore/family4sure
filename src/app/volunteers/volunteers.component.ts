import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {
  volunteers = any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getVolunteers(){
    this.http.get('localhost:3000/').subscribe( volunteers => {
      this.volunteers = volunteers;
    },
        error => {
        console.log(error);
      });
  }

}
