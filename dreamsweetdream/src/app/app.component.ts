import { Component, Input } from '@angular/core';
import { trigger, transition, style, state, animate, query, stagger, useAnimation, group} from "@angular/animations";
import { fadeAnimation } from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slider', [
      transition(":increment", group([
        query(':enter', [
          style({
            left: '100%'
          }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({
            left: '-100%'
          }))
        ])
      ])),
      transition(":decrement", group([
        query(':enter', [
          style({
            left: '-100%'
          }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({
            left: '100%'
          }))
        ])
      ])),
      transition('false => true', [
        query('.page-item', stagger('100ms', [
          useAnimation(fadeAnimation, {
            params: {
              time: '500ms',
              start: 0,
              end: 1
            }
         })
        ]))
      ]),
      transition('true => false', [
        query('.page-item', stagger('100ms', [
          useAnimation(fadeAnimation, {
            params: {
              time: '500ms',
              start: 1,
              end: 0
            }
         })
        ]))
      ])
    ])
  ]
})
export class AppComponent{

  constructor() {}

  private _images: string[] = ['https://via.placeholder.com/400x400?text=Hello',
  'https://via.placeholder.com/400x400?text=Angular',
  'https://via.placeholder.com/400x400?text=Animations'
  ];

  page: number = 0;

  get images() {
    return [this._images[this.page]];
  }

  previous() {
    this.page = Math.max(this.page - 1, 0);
    console.log(this.page)
  }

  next() {
    this.page = Math.min(this.page + 1, this._images.length - 1);
    console.log(this.page)
  }

}
