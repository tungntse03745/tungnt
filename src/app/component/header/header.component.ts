import { Component, OnInit, Input } from '@angular/core';
import { IMAGE } from '../shared/image.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() language: any;
  logo = IMAGE.LOGO;
  langs = [
    { id: 'en', value: 'English' },
    { id: 'jp', value: 'Japanese' },
  ];
  constructor() { }

  ngOnInit() {
   console.log(' this.language;',  this.language);
   
  }

}
