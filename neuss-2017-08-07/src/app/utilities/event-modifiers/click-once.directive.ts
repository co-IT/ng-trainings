import { Directive, Renderer2, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  // <button click.once ..>
  // tslint:disable-next-line:directive-selector
  selector: '[click.once]'
})
export class ClickOnceDirective implements OnInit {
    // <button (click.once) ...>
    // tslint:disable-next-line:no-output-rename
    @Output('click.once') clickOnce = new EventEmitter();

    unsubscribe: Function;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.unsubscribe = this.renderer.listen(this.element.nativeElement, 'click', event => {
      this.renderer.setAttribute(this.element.nativeElement, 'disabled', 'true');
      this.clickOnce.emit(event);
      this.unsubscribe();
    });
  }
}
