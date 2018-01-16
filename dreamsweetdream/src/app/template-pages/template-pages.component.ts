import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-template-pages',
  templateUrl: './template-pages.component.html',
  styleUrls: ['./template-pages.component.scss']
})
export class TemplatePagesComponent implements OnInit {

  @Output()
  getNext: EventEmitter<String> = new EventEmitter<String>()
  @Output()
  getPrev: EventEmitter<String> = new EventEmitter<String>()

  constructor() { }

  ngOnInit() {
  }

  prev(){
    this.getNext.emit()
  }

  next(){
    this.getPrev.emit()
  }

}
