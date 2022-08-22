import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from './services/auth.guard';
import { EditorComponent } from './editor/editor.component';

const routes: Routes =[
    { path: 'home',				component: HomeComponent },
    { path: 'create',			component: CreateComponent,		canActivate: [AuthGuard] },
    { path: 'editor',				component: EditorComponent },
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
