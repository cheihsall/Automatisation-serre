import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systeme',
  templateUrl: './systeme.component.html',
  styleUrls: ['./systeme.component.scss']
})
export class SystemeComponent implements OnInit {
  bouton:any
  ouvert='assets/ouvert.png'
  fermer='assets/fermer.png'
  ngOnInit(): void {
      
  }
}
