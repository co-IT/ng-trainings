import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ViewType } from '../view-type';

@Component({
  selector: 'ws-view-toggle',
  templateUrl: './view-toggle.component.html',
  styleUrls: ['./view-toggle.component.scss']
})
export class ViewToggleComponent {
  active = ViewType.Kachel;
  view = ViewType;

  @Output() change = new EventEmitter<ViewType>();

  setView(type: ViewType) {
    this.active = type;
    this.change.emit(type);
  }
}
