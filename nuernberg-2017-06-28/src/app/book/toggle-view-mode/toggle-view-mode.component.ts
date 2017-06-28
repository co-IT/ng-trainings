import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tr-toggle-view-mode',
  templateUrl: './toggle-view-mode.component.html',
  styleUrls: ['./toggle-view-mode.component.sass']
})
export class ToggleViewModeComponent implements OnInit {
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

}
