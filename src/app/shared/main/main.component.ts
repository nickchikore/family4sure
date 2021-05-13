import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public href: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const url =this.router.url;
    this.href = url;
  }

}
