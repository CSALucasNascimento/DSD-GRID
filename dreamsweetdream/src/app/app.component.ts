import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

import { PageService } from './page.service';
import { PageItem } from './page-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private pages: PageItem[] = [];

  constructor(private pageService: PageService) {
  }

  ngOnInit() {
    this.pages = this.pageService.getPages();
  }

}
