import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewMode } from './view-mode';

@Component({
  selector: 'tr-book-view-toggle',
  templateUrl: './book-view-toggle.component.html',
  styleUrls: ['./book-view-toggle.component.sass']
})
export class BookViewToggleComponent {

  viewMode = ViewMode;
  @Output() change = new EventEmitter<ViewMode>();

}
