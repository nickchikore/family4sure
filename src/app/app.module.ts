import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { HomeComponent } from './home/home.component';
import { FriendInDeedComponent } from './friend-in-deed/friend-in-deed.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrainingComponent } from './training/training.component';
import { SafeguardingComponent } from './safeguarding/safeguarding.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
      VolunteersComponent,
      HomeComponent,
      FriendInDeedComponent,
      ContactUsComponent,
      AboutUsComponent,
      ResourcesComponent,
      ProjectsComponent,
      TrainingComponent,
      SafeguardingComponent,
      MissionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
