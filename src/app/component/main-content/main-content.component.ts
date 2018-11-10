import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  CONTENT = [
    {
      id: 1,
      name: 'image 1',
      src: '../assets/image/300x250.jpg'
    },
    {
      id: 2,
      name: 'image 2',
      src: '../assets/image/300x600.jpg'
    },
    {
      id: 3,
      name: 'image 3',
      src: '../assets/image/320x100.jpg'
    },
    {
      id: 4,
      name: 'image 4',
      src: '../assets/image/336x280.jpg'
    },
    {
      id: 5,
      name: 'image 5',
      src: '../assets/image/728x90.jpg'
    }
  ]
  imageId: number;
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
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }
  myfunc(event) {
    console.log('xx', event);
    
  }
  onPressImage(event) {
    console.log(event);
    this.imageId = event.id - 1;
  };
}
