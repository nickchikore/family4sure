import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: any = [
    {
      id: 1,
      title: 'Friend in Deed',
      url: 'family4sure/projects/friend-in-deed',
      className: 'friend-in-need',
      ref: 'friend-in-need',
      type: 'project'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
