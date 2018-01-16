import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, style, state, animate, query, stagger, useAnimation, group} from "@angular/animations";
import { fadeAnimation } from "../animations";

import { PageItem } from '../page-item';
import { PageDirective } from '../page.directive';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('currentPageIndex', [
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
export class PagesComponent implements OnInit {

  @Input() pages: PageItem[];
  @ViewChild(PageDirective) pageHost: PageDirective;
  currentPageIndex: number = 0;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let pageItem = this.pages[this.currentPageIndex];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(pageItem.component);
    let viewContainerRef = this.pageHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<PageComponent>componentRef.instance).data = pageItem.data;
  }

  next() {
    this.currentPageIndex = (this.currentPageIndex + 1) % this.pages.length;
    this.loadComponent();
    console.log('next-page')
  }

  prev() {
    this.currentPageIndex = (this.currentPageIndex - 1) % this.pages.length;
    this.loadComponent();
  }

}
