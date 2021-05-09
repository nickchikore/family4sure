import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() cardClass: string;
  @Input() title: string;
  @Input() description: string;
  @Input() cta: string;
  @Input() ctaUrl: string;
  @Input() subtitle: string;
  @Input() iconRef: string;
  @Input() hasTitle: boolean;
  @Input() hasDescription: boolean;
  @Input() hasCta = true;
  @Input() hasSubtitle: boolean;
  @Input() hasIcon: boolean;

  constructor() { }

  ngOnInit() {
  }

}
