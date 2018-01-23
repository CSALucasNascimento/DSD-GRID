import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[page-host]'
})
export class PageDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
