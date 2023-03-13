import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HistoriqueComponent } from './historique/historique.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    DashbordComponent,
    HistoriqueComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
