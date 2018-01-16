import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, style, state, animate, query, stagger, useAnimation, group, animateChild} from "@angular/animations";
import { fadeAnimation } from "../animations";
import { PageItem } from '../page-item';
import { PageDirective } from '../page.directive';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  host: {
    '[@slider]':'currentPageIndex'
  },
  animations: [
    trigger('slider', [
      transition(":increment", group([
        query(':enter', stagger('500ms', [
          useAnimation(fadeAnimation, {
            params: {
              time: '1000ms',
              start: 0,
              end: 1
            }
         })
        ])),
        query(':leave', stagger('500ms', [
          useAnimation(fadeAnimation, {
            params: {
              time: '1000ms',
              start: 1,
              end: 0
            }
         })
        ]))
      ])),
      transition(":decrement", group([
        query(':enter', stagger('500ms', [
          useAnimation(fadeAnimation, {
            params: {
              time: '1000ms',
              start: 0,
              end: 1
            }
         })
        ])),
        query(':leave', stagger('500ms', [
          useAnimation(fadeAnimation, {
            params: {
              time: '1000ms',
              start: 1,
              end: 0
            }
         })
        ]))
      ]))
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
    componentRef.instance.getEvent.subscribe(
      event => {
        this.currentPageIndex = event === 'next' ? (this.currentPageIndex < this.pages.length - 1 ? this.currentPageIndex + 1 : 0) : (this.currentPageIndex > 0 ? this.currentPageIndex - 1 : this.pages.length - 1)
        this.loadComponent()
      }
    )
  }

}
