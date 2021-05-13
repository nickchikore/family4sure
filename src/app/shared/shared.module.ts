import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { TileComponent } from './tile/tile.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    HeroComponent,
    TileComponent,
    CardComponent,
    MainComponent,
    ContactFormComponent,
    FooterComponent
],
  exports: [
    HeaderComponent,
    HeroComponent,
    TileComponent,
    CardComponent,
    MainComponent,
    ContactFormComponent
  ]
})
export class SharedModule { }
