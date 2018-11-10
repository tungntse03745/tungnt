import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RightContentComponent } from './component/right-content/right-content.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import { NgxCarouselModule } from 'ngx-carousel';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import 'hammerjs';
import { DownloadImageDialogComponent } from './component/right-content/component/download-image-dialog/download-image-dialog.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

const COMPONENT = [
  HeaderComponent,
  RightContentComponent,
  MainContentComponent,
  FooterComponent
]
const MODULE = [
  BrowserModule,
  FlexLayoutModule,
  BrowserAnimationsModule,
  MatSelectModule,
  NgxCarouselModule,
  MatIconModule,
  MatDialogModule,
  NoopAnimationsModule,
  MatRadioModule,
  MatCheckboxModule
]
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT,
    DownloadImageDialogComponent,
  ],
  imports: [
    ...MODULE
  ],
  providers: [],
  entryComponents: [DownloadImageDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
