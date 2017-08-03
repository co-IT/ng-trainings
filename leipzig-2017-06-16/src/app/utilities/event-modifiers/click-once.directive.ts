import {
  Directive,
  Output,
  EventEmitter,
  OnInit,
  Renderer2,   // draws html elements and registers event listeners
  ElementRef  // points to the element that we want to improve
 } from '@angular/core';

@Directive({
  // <button click.once>Senden</button>
  selector: '[click.once]'
})
export class ClickOnceDirective implements OnInit {

  // <button (click.once)>Senden</button>
  // tslint:disable-next-line:no-output-rename
  @Output('click.once') clickOnce = new EventEmitter();
  unsubscribe: Function;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.unsubscribe = this.renderer.listen(this.element.nativeElement, 'click', (event) => {
      // <button disabled="true"></button>
      this.renderer.setAttribute(this.element.nativeElement, 'disabled', 'true');
      this.clickOnce.emit(event);
      this.unsubscribe();
    });
  }
}
