import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SLIDES } from '../../../shared/slides.constants';

@Component({
  selector: 'app-download-image-dialog',
  templateUrl: './download-image-dialog.component.html',
  styleUrls: ['./download-image-dialog.component.scss']
})
export class DownloadImageDialogComponent implements OnInit {
  url: any;
  constructor(public dialogRef: MatDialogRef<DownloadImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.url = SLIDES[this.data.currentSlide].src;
  }

}
