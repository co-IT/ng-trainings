import { Directive, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[click.once], [click-once]'
})
export class ClickOnceDirective {

  unsubscribe: Function;
  @Output('click.once') clickOnce = new EventEmitter<Event>();
  @Output('click-once') clickOnce2 = this.clickOnce;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.unsubscribe = this.renderer.listen(this.element.nativeElement, 'click', event => this.unsubscribeAfterFirstClick(event));
  }

  unsubscribeAfterFirstClick(event) {
    // button deaktivieren
    this.renderer.setAttribute(this.element.nativeElement, 'disabled', 'disabled');
    // click event ausführen
    this.clickOnce.emit(event);
    // eventhandler löschhen
    this.unsubscribe();
  }
}

/* <button click.once="doOnce()">Do</button> */

/* <button (click-once)="doOnce()">Do</button> */
/* <button (click.once)="doOnce()">Do</button> */

/* nach einem Klick */
/* <button (click.once)="doOnce()" disabled="true">Done</button> */
