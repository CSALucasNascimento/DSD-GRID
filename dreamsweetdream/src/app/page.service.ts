import { Injectable } from '@angular/core'

import { TemplatePagesComponent } from "./template-pages/template-pages.component";
import { PageItem } from './page-item';

@Injectable()
export class PageService {

  images: [any] = null
  imagesCelebration: [any] = null
  
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
    this.imagesCelebration = [
      '/assets/images/wedding/cakes/cake1.jpg', 
      '', 
      '/assets/images/wedding/cakes/cake3.jpg',
      '/assets/images/wedding/cakes/cake1.jpg',
      '/assets/images/wedding/cakes/cake2.jpg',
      '/assets/images/wedding/cakes/cake3.jpg',
      '/assets/images/wedding/cakes/cake1.jpg',
      '/assets/images/wedding/cakes/cake2.jpg',
      '',
      '/assets/images/wedding/cakes/cake1.jpg',
      '/assets/images/wedding/cakes/cake2.jpg',
    ]
  }

  getPages(){
    return [
      new PageItem(TemplatePagesComponent, { images: this.images, slug: "page-1", name: "\nWeddings", title: "Cakes", text: "Welcome to DSD cakes for your wedding!" }),
      new PageItem(TemplatePagesComponent, { images: this.images, slug: "page-2", name: "Baby\nShower's", title: "Sweets", text: "Welcome to DSD sweets for your wedding!" }),
      new PageItem(TemplatePagesComponent, { images: this.imagesCelebration, slug: "page-3", name: "Celebrations", title: "Cakes", text: "Page-3-text" }),
      new PageItem(TemplatePagesComponent, { images: this.images, slug: "page-2", name: "Special\nDates", title: "Valentine's Day", text: "Page-4-text" })
    ]
  }

}
