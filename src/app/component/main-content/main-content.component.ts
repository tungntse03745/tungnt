import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { IMAGE } from '../shared/image.constants';
import { SLIDES } from '../shared/slides.constants';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Output('currentSlide') _currentSlide: EventEmitter<any> = new EventEmitter();
  slides = SLIDES;
  imageId: number;
  image_icon = IMAGE;
  public carouselOne: NgxCarousel;
  constructor() { }
  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 10000,
      point: {
        visible: false
      },
      load: 2,
      touch: false,
      loop: true,
      custom: 'banner'
    }
  }
  onPressImage(event) {
    this.imageId = event.id - 1;
  };
  onmoveFn(event) {
    console.log('xx', event);
    
    this._currentSlide.emit(event.currentSlide)
  }
}
