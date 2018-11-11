import { Component, OnInit } from '@angular/core';
import { IMAGE } from '../shared/image.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  image = IMAGE;
  constructor() { }

  ngOnInit() {
  }

}
