import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systeme',
  templateUrl: './systeme.component.html',
  styleUrls: ['./systeme.component.scss']
})
export class SystemeComponent implements OnInit {
  imgOuvert='assets/ouvert.png'
  imgFermer='assets/fermerr.jpg'
  imageSrc = 'assets/extract.png';
  imgtomate ='assets/tomate.jpg';
  imgOignon ='assets/oignon.webp';
  imgpompe ='assets/pompe.jpeg';
  imgpompegif ='assets/pompe.gif';
  clicked = false;
  clicke =false;
  clickedA=false;
  clickeE=false;
  cArrose=false;
  cArreter=false;

  imageButtons = [ {src:'assets/extract.png', srcs:'', srcr :''}];
  imageButtonOn = [ {src:'assets/extracteur.gif',  srcr:'', srcs : ''}];

  imageFermer = [ {src:'assets/fermerr.jpg', srcs:'', srcr :''}];
  imageOuvert = [ {src:'assets/openserre.webp',  srcr:'', srcs : ''}];

  imageArroser = [ {src:'assets/pompe.gif', srcs:'', srcr :''}];
  imageArreter = [ {src:'assets/pompe.jpeg',  srcr:'', srcs : ''}];

  imageArroT = [ {src:'assets/pompe.gif', srcs:'', srcr :''}];
  imagetomate = [ {src:'assets/tomate.jpg',  srcr:'', srcs : ''}];

  imageArrosO = [ {src:'assets/pompe.gif', srcs:'', srcr :''}];
  imageArreterO = [ {src:'assets/oignon.webp',  srcr:'', srcs : ''}];




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

  }
  arrose(imageNameObject: { srcr: string; srcs: string; src: string;}) {
    this.imgpompe = imageNameObject.src;

  }
  arroseT(imageNameObject: { srcr: string; srcs: string; src: string;}) {
    this. imgtomate= imageNameObject.src;

  }
  arroseO(imageNameObject: { srcr: string; srcs: string; src: string;}) {
    this.imgOignon= imageNameObject.src;

  }
}
