import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr-toggle-view-mode',
  templateUrl: './toggle-view-mode.component.html',
  styleUrls: ['./toggle-view-mode.component.sass']
})
export class ToggleViewModeComponent {
  @Output() change = new EventEmitter<boolean>();
}
