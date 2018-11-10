import { Component, OnInit } from '@angular/core';

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
      src: '../assets/image/300x250.jpg'
    },
    {
      id: 3,
      name: 'image 3',
      src: '../assets/image/300x250.jpg'
    },
    {
      id: 4,
      name: 'image 4',
      src: '../assets/image/300x250.jpg'
    },
    {
      id: 5,
      name: 'image 5',
      src: '../assets/image/300x250.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
