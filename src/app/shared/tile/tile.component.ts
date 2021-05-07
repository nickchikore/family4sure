import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() title: string;
  @Input() imgUrl: string;
  @Input() summary: string;
  @Input() url: string;
  @Input() cta: string;
  @Input() tileClass: string;
  @Input() hasCTA: boolean;
  constructor() { }

  ngOnInit() {
  }

}
