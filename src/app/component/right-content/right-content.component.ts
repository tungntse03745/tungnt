import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadImageDialogComponent } from './component/download-image-dialog/download-image-dialog.component';
import { IMAGE } from '../shared/image.constants';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.scss']
})
export class RightContentComponent implements OnInit {
  current: any;
  image = IMAGE;
  private _currentSlide: any;
  @Input()
  public get currentSlides(): any {
    return this._currentSlide;
  }
  public set currentSlides(value: any) {
    this.current = value;
    this._currentSlide = value;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }
  onPressDownload() {
    let dialogRef = this.dialog.open(DownloadImageDialogComponent, {
      width: '500px',
      height: 'auto',
      data: { currentSlide: this.current || 0}
    });
  }
}
