import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserformComponent } from './components/userform/userform.component';
import { MapComponent } from './components/map/map.component';
import { FailureComponent } from './components/failure/failure.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    NotfoundComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    UserformComponent,
    MapComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
