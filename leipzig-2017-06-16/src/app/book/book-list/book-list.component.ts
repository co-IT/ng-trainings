import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this
      .route
      .params
      .subscribe(params => console.warn(params['id']));
  }

}
