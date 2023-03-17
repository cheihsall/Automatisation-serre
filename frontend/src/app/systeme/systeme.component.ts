import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systeme',
  templateUrl: './systeme.component.html',
  styleUrls: ['./systeme.component.scss']
})
export class SystemeComponent implements OnInit {
  imgOuvert='assets/ouvert.png'
  imgFermer='assets/fermer.png'
  imageSrc = 'assets/extract.png';
  imgtomate ='assets/tomate.jpg'
  imageButtons = [ {src:'assets/extract.png', srcs:'', srcr :''}];
  imageButtonOn = [ {src:'assets/extracteur.gif',  srcr:'', srcs : ''}];

  imageFermer = [ {src:'assets/fermer.png', srcs:'', srcr :''}];
  imageOuvert = [ {src:'assets/ouvert.png',  srcr:'', srcs : ''}];

  
  ngOnInit(): void {
      
  }
  onClick(imageNameObject: { srcr: string; srcs: string; src: string;}) {
    this.imageSrc = imageNameObject.src;
    
   /*  this.onSrc = imageNameObject.srcs ;
    this.offSrc = imageNameObject.srcr ;
     */
  }
  cliquer(imageNameObject: { srcr: string; srcs: string; src: string;}) {
   
    this.imgFermer = imageNameObject.src;
   /*  this.onSrc = imageNameObject.srcs ;
    this.offSrc = imageNameObject.srcr ;
     */
  }
}
