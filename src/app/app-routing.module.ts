import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FriendInDeedComponent } from './friend-in-deed/friend-in-deed.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResourcesComponent } from './resources/resources.component';
import { SafeguardingComponent } from './safeguarding/safeguarding.component';
import { TrainingComponent } from './training/training.component';
import { VolunteersComponent } from './volunteers/volunteers.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'volunteers', component: VolunteersComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'projects/friend-in-deed', component: FriendInDeedComponent},
  {path: 'volunteer/training', component: TrainingComponent},
  {path: 'volunteer/our-mission', component: MissionComponent},
  {path: 'volunteer/safeguarding', component: SafeguardingComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
