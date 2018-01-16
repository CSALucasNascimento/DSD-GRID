import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { MaterialComponentsModule } from './material-components.module';
import { NgxCarouselModule } from 'ngx-carousel';

import { AppComponent } from './app.component';
import { TemplatePagesComponent } from './template-pages/template-pages.component';
import { PageService } from './page.service';
import { PagesComponent } from './pages/pages.component';
import { PageDirective } from './page.directive';


@NgModule({
  declarations: [
    AppComponent,
    TemplatePagesComponent,
    PagesComponent,
    PageDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    NgxCarouselModule
  ],
  entryComponents: [TemplatePagesComponent],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
