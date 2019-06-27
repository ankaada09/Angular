import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HeaderComponent } from './header/header.component';
import { KategorijeComponent } from './kategorije/kategorije.component';
import { HomeComponent } from './home/home.component';
import { CategorijeService } from './categorije.service';
import {PostService} from './postovi.service';
import { SingleComponent } from './single/single.component';
import { ComentarComponent } from './comentar/comentar.component';
import { ContactComponent } from './contact/contact.component';
import {ViewChild} from "@angular/core";
import{ContacttService} from './contactt.service';
import { LoginComponent } from './login/login.component';
import { OrderByPipe } from './order-by.pipe'



@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    HeaderComponent,
    KategorijeComponent,
    HomeComponent,
    SingleComponent,
    ComentarComponent,
    ContactComponent,
    LoginComponent,
    OrderByPipe,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(
 [
   
   {path:'', component:HomeComponent},
   {path:'kategorije', component:KategorijeComponent},
   {path:'post/:id',component:SingleComponent },
   {path:'contact', component:ContactComponent},
   {path:'login', component:LoginComponent}
   
    ])
  ],
  providers: [CategorijeService, PostService,ContacttService],
  bootstrap: [AppComponent,NavigacijaComponent,HeaderComponent,KategorijeComponent,HomeComponent,
    SingleComponent,ComentarComponent,ContactComponent,LoginComponent]
})
export class AppModule {


 }
