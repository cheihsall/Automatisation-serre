import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HistoriqueComponent } from './historique/historique.component';
import { MapComponent } from './map/map.component';
import { SystemeComponent } from './systeme/systeme.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxPaginationModule} from 'ngx-pagination';
import { IgxCalendarModule } from 'igniteui-angular'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test3Component } from './test3/test3.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    DashbordComponent,
    HistoriqueComponent,
    MapComponent,
    SystemeComponent,
    Test3Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
