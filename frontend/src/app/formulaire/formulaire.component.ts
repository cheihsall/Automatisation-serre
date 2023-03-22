import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit, OnDestroy {
message: any;
loginUser() {
throw new Error('Method not implemented.');
}

  registerForm: FormGroup;
  errMsg: any;
  donnee : any;
  submitted = false;
  showcode = false;

  inputType : any = "password";

  constructor(
    public formBuilder: FormBuilder  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")   ]],
      password: ['', [Validators.required]],
    });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {


      }

  //  })
  }

