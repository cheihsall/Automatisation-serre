import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemeComponent } from './systeme/systeme.component';


const routes: Routes = [
  {path:'systeme',component:SystemeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
