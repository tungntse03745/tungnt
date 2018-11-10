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
import 'hammerjs';

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
  NgxCarouselModule
]
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT,
  ],
  imports: [
    ...MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
