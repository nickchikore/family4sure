import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() Title: string;
  @Input() subTitle: string;
  @Input() Para1: string;
  @Input() Para2: string;
  @Input() cta: string;
  @Input() ctaURL: string;
  @Input() classInput: string;
  @Input() btnAttr: string;
  @Input() hasTitle: boolean;
  @Input() hasSubTitle: boolean;
  @Input() hasExtraContent: boolean;
  @Input() hasCTA: boolean;
  @Input() isMobile: boolean;
  @Input() hasHeroImg: boolean;
  @Input() external: any;

  constructor() {
    this.hasCTA = false;
    this.hasTitle = false;
    this.hasHeroImg = false;
    this.isMobile = false;
    this.hasSubTitle = false;
    this.external = false;
  }

  ngOnInit() {
  }

}
