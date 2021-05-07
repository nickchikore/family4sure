import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { TileComponent } from './tile/tile.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HeroComponent,
    TileComponent,
    CardComponent
],
  exports: [
    HeaderComponent,
    HeroComponent,
    TileComponent,
    CardComponent
  ]
})
export class SharedModule { }
