import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SystemeComponent } from './systeme/systeme.component';

const routes: Routes = [
  { path: 'dashbord', component: DashbordComponent },
  {path:'systeme',component:SystemeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
