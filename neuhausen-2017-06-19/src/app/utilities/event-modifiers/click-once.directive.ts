import { Directive, ElementRef, Renderer2, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click-once]'
})
export class ClickOnceDirective implements OnInit {
  // (click-once) || (clickOnce)
  // tslint:disable-next-line:no-output-rename
  @Output('click-once') clickOnce = new EventEmitter<Event>();

  unsubscribe: Function;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.unsubscribe = this.renderer.listen(
      this.element.nativeElement,
      'click',
      event => {
        this.renderer.setAttribute(this.element.nativeElement, 'disabled', 'true');
        // const parent = this.element.nativeElement.parentNode
        // parent.childNodes.map((elem) => {
        // })
        this.clickOnce.emit(event);
        this.unsubscribe();
      }
    );
  }
}
