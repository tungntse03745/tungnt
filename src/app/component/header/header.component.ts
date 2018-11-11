import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMAGE } from '../shared/image.constants';
import { LANGS } from '../shared/language.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('currentLanguage') _currentLanguage: EventEmitter<any> = new EventEmitter();
  @Input() language: any;
  languageImg = IMAGE.ENGLISH;
  logo = IMAGE.LOGO;
  langs = LANGS;
  constructor() { }

  ngOnInit() {
  }
  languageChange(event) {
    const currentLang = this.langs.filter(el => el.id === event.target.value);
    this.languageImg = currentLang[0].img;
    this._currentLanguage.emit(event.target.value);
  }
 }
