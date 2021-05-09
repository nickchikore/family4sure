import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
