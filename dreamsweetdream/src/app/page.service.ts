import { Injectable } from '@angular/core'

import { TemplatePagesComponent } from "./template-pages/template-pages.component";
import { PageItem } from './page-item';

@Injectable()
export class PageService {

  images: [any] = null
  
  constructor() {
    this.images = [
      '/assets/images/wedding/cakes/cake1.jpg', 
      '/assets/images/wedding/cakes/cake2.jpg', 
      '/assets/images/wedding/cakes/cake3.jpg',
      '/assets/images/wedding/cakes/cake1.jpg',
      '/assets/images/wedding/cakes/cake2.jpg',
      '/assets/images/wedding/cakes/cake3.jpg',
      '/assets/images/wedding/cakes/cake1.jpg',
      '/assets/images/wedding/cakes/cake2.jpg',
      '/assets/images/wedding/cakes/cake3.jpg',
      '/assets/images/wedding/cakes/cake1.jpg',
      '/assets/images/wedding/cakes/cake2.jpg',
    ]
  }

  getPages(){
    return [
      new PageItem(TemplatePagesComponent, { images: this.images, slug: "page-1", name: "Page-1-name", title: "Page-1-title", text: "Page-1-text" }),
      new PageItem(TemplatePagesComponent, { images: this.images, slug: "page-2", name: "Page-2-name", title: "Page-2-title", text: "Page-2-text" }),
      new PageItem(TemplatePagesComponent, { images: this.images, slug: "page-3", name: "Page-3-name", title: "Page-3-title", text: "Page-3-text" }),
      new PageItem(TemplatePagesComponent, { images: this.images, slug: "page-4", name: "Page-4-name", title: "Page-4-title", text: "Page-4-text" })
    ]
  }

}
