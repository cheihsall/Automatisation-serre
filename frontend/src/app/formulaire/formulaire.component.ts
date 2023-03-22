import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { UserService } from '../user.service';
//import "~bootstrap-icons/font/bootstrap-icons.css";

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
 // code;
 // message;
  // yeux
  inputType : any = "password";
 // inputType_pwd;
 // inputType_txt;

  constructor(/*private RealtimeService: RealtimeService,*/
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
    //this.RealtimeService.getTemp().subscribe((data) => {

    //  this.donnee = data
//console.log(data);

  //    if ( this.donnee /*== "D3 A5 D2 2E "*/) {
       //window.location.reload();
        //this.router.navigate(['/systeme'])

// appellle service login
     /* this.userService.login({nfc: this.donnee}).subscribe(
        (data:any) => {
          console.log(data);


          let tmp = data;
          this.code = data.code;
          if(this.code == "noEmail"){
            this.showcode = true;
            htmlStr: this.message = "Acces refusé !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }else if (this.code == "compteNoActive"){
            this.showcode = true;
            htmlStr: this.message = "Ce compte a été déactivé !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }else if (this.code == "noPassword"){
            this.showcode = true;
            htmlStr: this.message = "Mots de passe incorrect !";
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }else if (this.code == "erreur"){
            this.showcode = true;
            htmlStr: this.message = "Une erreur c'est produite, !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else{
          localStorage.setItem('token', tmp.data.token);
          localStorage.setItem('id', tmp.data.userId);
          localStorage.setItem('prenom', tmp.data.prenom);
          localStorage.setItem('nom', tmp.data.nom);
          localStorage.setItem('role', tmp.data.role);
          localStorage.setItem('matricule', tmp.data.matricule);
          localStorage.setItem('email', tmp.data.email);
          if ((tmp.data.role == 'Administrateur')||(tmp.data.role == 'Utilisateur')) {
              this.router.navigate(['/systeme'])
            }

        }
      });*/

      }

  //  })
  }
//  ngOnDestroy() {}

  /*loginUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
// appellle service login
      this.userService.login(this.registerForm.value).subscribe(
        (data:any) => {
          console.log(data);


          let tmp = data;
          this.code = data.code;
          if(this.code == "noEmail"){
            this.showcode = true;
            htmlStr: this.message = "L'email saisie n'existe pas !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }else if (this.code == "compteNoActive"){
            this.showcode = true;
            htmlStr: this.message = "Ce compte a été déactivé !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }else if (this.code == "noPassword"){
            this.showcode = true;
            htmlStr: this.message = "Mots de passe incorrect !";
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }else if (this.code == "erreur"){
            this.showcode = true;
            htmlStr: this.message = "Une erreur c'est produite, !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else{
          localStorage.setItem('token', tmp.data.token);
          localStorage.setItem('id', tmp.data.userId);
          localStorage.setItem('prenom', tmp.data.prenom);
          localStorage.setItem('nom', tmp.data.nom);
          localStorage.setItem('role', tmp.data.role);
          localStorage.setItem('matricule', tmp.data.matricule);
          localStorage.setItem('email', tmp.data.email);
          if ((tmp.data.role == 'Administrateur')||(tmp.data.role == 'Utilisateur')) {
              this.router.navigate(['/systeme'])
            }

        }
      });
        }*/





   //   }

   function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
      // some time the voice will not be initialized so we can call spaek with empty string
      // this will initialize the voices
      let utterance = new SpeechSynthesisUtterance("");
      speechSynthesis.speak(utterance);
      voices = speechSynthesis.getVoices();
    }
    return voices;
  }


  function speak(text: string, voice: SpeechSynthesisVoice | null, rate: number, pitch: number, volume: number) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'fr';
    speakData.voice = voice;

    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking
    speechSynthesis.speak(speakData);

  }

  if ('speechSynthesis' in window) {

    let voices = getVoices();
    let rate = 1, pitch = 1, volume = 1;
    let text = "bonjour! je me nomme papa gentil et je suis une intelligence artificielle ";

    speak(text, voices[5], rate, pitch, volume);

    setTimeout(()=>{ // speak after 2 seconds
      rate = 1;
       pitch = 1;
        volume = 0.5;
      text = "dite moi en quoi puis-je vous aidez";
      speak(text, voices[10], rate, pitch, volume );
    }, 2000);
  }else{
    console.log(' Speech Synthesis Not Supported 😞');
  }
