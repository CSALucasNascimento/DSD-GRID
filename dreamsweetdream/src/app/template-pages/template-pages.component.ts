import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs/Rx'

@Component({
  selector: 'app-template-pages',
  templateUrl: './template-pages.component.html',
  styleUrls: ['./template-pages.component.scss']
})
export class TemplatePagesComponent implements OnInit {

  getEvent: Subject<string> = new Subject()

  constructor() { }

  ngOnInit() {
  }

  prev(){
    this.getEvent.next('prev')
  }

  next(){
    this.getEvent.next('next')
  }

}
