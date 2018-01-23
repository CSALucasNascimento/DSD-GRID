import { Component, OnInit, AfterViewInit, HostListener, ElementRef, Renderer2 } from '@angular/core'
import { Subject } from 'rxjs/Rx'

import * as  VanillaTilt from 'vanilla-tilt'

@Component({
  selector: 'app-template-pages',
  templateUrl: './template-pages.component.html',
  styleUrls: ['./template-pages.component.scss']
})
export class TemplatePagesComponent implements OnInit, AfterViewInit {

  getEvent: Subject<string> = new Subject()

  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    let images = this._el.nativeElement.querySelectorAll(`.pages .has-image`)
    for (let index = 0; index < images.length; index++) {
      const element = images[index]
      let bcr = element.getBoundingClientRect()
      const transX = 2*50/window.innerWidth*event.clientX - 50
      const transY = 2*50/window.innerHeight*event.clientY - 50
      const dist = this.distance(bcr.left + bcr.width/2, bcr.top + bcr.height/2, window.innerWidth/2, window.innerHeight/2)
			const tx = transX/window.innerWidth*dist || 0
      const ty = transY/window.innerHeight*dist || 0
      this._renderer.setStyle(element, `transform`, `translate3d(${tx}px, ${ty}px, 0)`)

    }
  }

  distance (x1,x2,y1,y2) {
		const a = x1 - x2
		const b = y1 - y2
		return Math.sqrt(a*a + b*b)
	}

  ngOnInit() {
  }

  ngAfterViewInit() {
    VanillaTilt.init(this._el.nativeElement.querySelector('.page-item'), {
      reverse: true,
      max: 25,
      speed: 400
    })
  }

  prev(){
    this.getEvent.next('prev')
  }

  next(){
    this.getEvent.next('next')
  }

}
