import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tr-toggle-view-mode',
  templateUrl: './toggle-view-mode.component.html',
  styleUrls: ['./toggle-view-mode.component.sass']
})
export class ToggleViewModeComponent implements OnInit {
  @Output() toggle: EventEmitter<string> = new EventEmitter<string>();

  viewState = 'grid';
  constructor() { }

  ngOnInit() {
  }

  toggleView() {
    this.viewState = (this.viewState === 'grid' ? 'list' : 'grid')
    this.toggle.emit(this.viewState);
  }

}
