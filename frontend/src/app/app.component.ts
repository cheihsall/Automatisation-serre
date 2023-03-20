import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsernameValidator } from './username.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users:any = [];

// nécessaire au controle de saisie du formulare de modification

submitted=false;
invalid = false;
vide = false;
  id: any;
// pagination
  p: number = 1;
term: any;
updateForm: FormGroup;
  code: any;

  errMsg : any;



  constructor(

    public formBuilder: FormBuilder,

  ) {
      //Crontôle de saisie du formulaire
      this.updateForm = this.formBuilder.group({
        prenom:['',[Validators.required , UsernameValidator.cannotContainSpace]],
        nom:['',[Validators.required , UsernameValidator.cannotContainSpace]],
        email:['',[Validators.required,Validators.email]],
        role:['',Validators.required],
        password:['',[Validators.required]],
        passwordConfirm: ['', Validators.required],
        data:[0, Validators.required],
        matricule: ['']
    }
  )
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    }
