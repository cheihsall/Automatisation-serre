import { Component } from '@angular/core';
import { donnee } from './../test2';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {
  temperature: any;
  humidite: any;
  lumiere: any;
  humsol: any;
  filter_entree!: any;

  ngOnInit(){
    this.filter_entree=donnee;
     console.log(this.filter_entree)
 
 
 
   }
}
