import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserformComponent } from './components/userform/userform.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/add', component: UserformComponent, canActivate: [AuthGuard]},
  {path: 'user/edit/:id', component: UserformComponent, canActivate: [AuthGuard]},
  {path: 'map', component: MapComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
