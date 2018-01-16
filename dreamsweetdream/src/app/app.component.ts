import { Component, Input } from '@angular/core';
import { PageService } from './page.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { PageItem } from './page-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private pages: PageItem[] = [];

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pages = this.pageService.getPages();
  }

}
