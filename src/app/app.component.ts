import { Component, OnInit } from '@angular/core';
import { ENGLISH } from './component/shared/en';
import { LANGS } from './component/shared/language.constants';
import { JAPANESE } from './component/shared/jp';
import { VIETNAMEESE } from './component/shared/vi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: any;
  current: any;
  ngOnInit() {
    this.language = ENGLISH;
  }
  currentSlide(event) {
    setTimeout(() => {
      this.current = event;
    }, 1);
  }
  currentLanguage(event) {
    switch (event) {
      case LANGS[0].id:
        this.language = ENGLISH;
        break;
      case LANGS[1].id:
        this.language = JAPANESE;
        break;
      case LANGS[2].id:
        this.language = VIETNAMEESE;
        break;
    }

  }
}
