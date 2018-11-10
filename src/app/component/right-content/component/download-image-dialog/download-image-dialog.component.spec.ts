import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadImageDialogComponent } from './download-image-dialog.component';

describe('DownloadImageDialogComponent', () => {
  let component: DownloadImageDialogComponent;
  let fixture: ComponentFixture<DownloadImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
