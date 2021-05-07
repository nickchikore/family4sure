import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showNavMobile: boolean;
  innerWidth: number;
  isMobile: boolean;
  url: string;
  ref: string;
  id: number;
  className: string;


  nav = [
    {
      id: 1,
      ref: 'about-us',
      url: 'home',
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
    {
      id: 4,
      ref: 'Mission',
      url: 'volunteer/our-mission',
      name: 'Mission'
    },
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
  constructor() { }

  toggleNav(){
    this.showNavMobile = !this.showNavMobile;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 769){
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }
  }

  ngOnInit() {
    this.isMobile = (window.innerWidth) <= 769;

  }

}

