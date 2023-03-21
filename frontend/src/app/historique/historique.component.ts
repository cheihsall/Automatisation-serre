import { donnee } from './../test';
import { Component, OnInit } from '@angular/core';
import { FormGroup} from "@angular/forms";


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})


export class HistoriqueComponent implements OnInit{
  temperature: any;
  humidite: any;
  lumiere: any;
  humsol: any;
  Date=new Date();
  filter_entree!: any;
  totalLenght: any; // pagination
  page : number=1; // pagination
  updateForm!: FormGroup;
  filterTerm!: string;// pagination


  ngOnInit(){
   this.filter_entree=donnee;
    console.log(this.filter_entree)

  }




//recherche par calendrier
  calend(e:any)
    {
      console.log(e.target.value)
      this.filter_entree = this.filter_entree.filter((el:any)=>{
return el.Date.toLowerCase().includes(e.target.value.toLowerCase())
      })
    }

}



