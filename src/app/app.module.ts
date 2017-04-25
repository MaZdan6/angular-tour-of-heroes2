import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HeroesComponent} from './heroes.component';
import {AppComponent} from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule
  ],
  providers: [HeroService],// wstrzykiwanie zależności
  bootstrap: [AppComponent]

})
export class AppModule { }
