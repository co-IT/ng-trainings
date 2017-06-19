import { Book } from './../models/book';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookGridElementComponent } from './book-grid-element.component';

describe('BookGridElementComponent', () => {

  describe('Unit Test', () => {

    describe('When a book is rated down', () => {

      it('the rating is decreased by one', () => {
        const gridElement = new BookGridElementComponent();
        gridElement.book = new Book('', '', []);

        gridElement.rateDown();

        expect(gridElement.book.rating).toEqual(-1);
      });
    });
  });

  describe('Shallow Test', () => {
    let fixture: ComponentFixture<BookGridElementComponent>;
    let gridElement: BookGridElementComponent;
    let rateUpBtn: DebugElement;
    let ratingLbl: DebugElement;

    beforeEach(() => {

      TestBed.configureTestingModule({
        declarations: [BookGridElementComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(BookGridElementComponent);

      gridElement = fixture.componentInstance;
      gridElement.book = new Book('', '', []);

      rateUpBtn = fixture.debugElement.query(By.css('#rateUpBtn'));
      ratingLbl = fixture.debugElement.query(By.css('.rating'));
    });

    describe('When a book is rated up', () => {

      it('the rating is increased by one', () => {
        rateUpBtn.nativeElement.click();

        fixture.detectChanges();

        expect(gridElement.book.rating).toEqual(1);
        expect(ratingLbl.nativeElement.innerHTML).toEqual('1');
      });
    })
  });
});
