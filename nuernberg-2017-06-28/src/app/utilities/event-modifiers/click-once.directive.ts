import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[click-once]'
})
export class ClickOnceDirective implements OnInit {
  @Output('click-once') clickOnce = new EventEmitter <Event> ();

  unsubscribe: Function;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.unsubscribe = this.renderer.listen(this.element.nativeElement, 'click', event => {
      this.renderer.setAttribute(this.element
        .nativeElement, 'disabled', 'true');
      this.clickOnce.emit(event);
      this.unsubscribe();
    });
  }
}
