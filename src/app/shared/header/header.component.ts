import { Component, HostListener, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav = [
    {
      id: 1,
      ref: 'about-us',
      url: 'who-we-are',
      name: 'About us'
    },
    {
      id: 2,
      ref: 'friend-in-deed',
      url: 'projects/friend-in-deed',
      name: 'Friend in deed'
    },
    {
      id: 3,
      ref: 'Volunteers',
      url: 'volunteers',
      name: 'Volunteers'
    },
    // {
    //   id: 4,
    //   ref: 'Mission',
    //   url: 'volunteer/our-mission',
    //   name: 'Mission'
    // },
    {
      id: 5,
      ref: 'Training',
      url: 'volunteer/training',
      name: 'Training'
    },
    {
      id: 6,
      ref: 'Safeguarding',
      url: 'volunteer/safeguarding',
      name: 'Safeguarding'
    },
    {
      id: 7,
      ref: 'Resources',
      url: 'resources',
      name: 'Resources'
    },
    {
      id: 8,
      ref: 'contact-us',
      url: 'contact-us',
      name: 'Contact us'
    }
  ];
  public isCollapsed = true;
  constructor(router: Router) {
    router.events
      .pipe(
        filter(
          (event: NavigationEvent) => {
            return ( event instanceof NavigationStart );
          }
        )
      );
    }
  ngOnInit() {
  }
}
