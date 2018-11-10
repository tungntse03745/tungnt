import { Component, OnInit } from '@angular/core';
import { ENGLISH } from './component/shared/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: any;
  ngOnInit() {
    this.language = ENGLISH;
    console.log('language', this.language);
    
  }
}
