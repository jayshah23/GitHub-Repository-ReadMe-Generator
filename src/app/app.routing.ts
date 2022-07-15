import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes =[
    { path: 'home',				component: HomeComponent },
    { path: 'user-profile',		component: ProfileComponent },
    { path: 'register',			component: SignupComponent },
    { path: 'landing',			component: LandingComponent },
    { path: 'login',			component: LoginComponent },
    { path: 'create',			component: CreateComponent,		canActivate: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
