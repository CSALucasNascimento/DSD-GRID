import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private elementRef:ElementRef) {
  }

  public carouselCupcake: NgxCarousel;
  
   ngOnInit() {
     this.carouselCupcake = {
       grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
       slide: 1,
       speed: 400,
       interval: 4000,
       point: {
         visible: false
       },
       load: 2,
       touch: true,
       loop: true,
       custom: 'banner',
     }
   }
  
   public myfunc(event: Event) {
   }

  ngAfterViewInit() {

    // let wrapperMenu = this.elementRef.nativeElement.querySelector('.wrapper-menu')
    // let navcheck = this.elementRef.nativeElement.querySelector('#navcheck')

    // wrapperMenu.addEventListener('click',() => {
    //   wrapperMenu.classList.toggle('open')
    //   navcheck.classList.toggle('checked')
    // })

  }

}
