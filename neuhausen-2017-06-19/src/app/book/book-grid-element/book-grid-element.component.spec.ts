import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { Book } from 'app/book/models/book';
import { BookGridElementComponent } from './book-grid-element.component';
import { ClickOnceDirective } from './../../utilities/event-modifiers/click-once.directive';

describe('BookGridElementComponent', () => {

  describe('Unit Test', () => {

    describe('When a book is rated down', () => {

      it('the rating is decreased by one', () => {
        const gridElement = new BookGridElementComponent();
        gridElement.book = new Book('', '', []);

        gridElement.rateDown();

        expect(gridElement.book.rating).toEqual(0);
      });
    });
  });

  describe('Shallow Tests', () => {
    describe('When a book is rated up', () => {
      let fixture: ComponentFixture<BookGridElementComponent>;
      let component: BookGridElementComponent;
      let rateUpBtn, ratingLbl;
      beforeEach(() => {
        // @NgModule({ declaration: [BookGridElementComponent]})
        TestBed.configureTestingModule({
          declarations: [
            BookGridElementComponent,
            ClickOnceDirective
          ],
          schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(BookGridElementComponent);
        component = fixture.componentInstance;

        component.book = Book.empty();
        fixture.detectChanges();

        // import { By } from '@angular/platform-browser';
        rateUpBtn = fixture.debugElement
                      .query(By.css('[name=book-add-rate-up]'));

        ratingLbl = fixture.debugElement
                      .query(By.css('.rating'));
      });

      it('the rating is increased by one', () => {
        rateUpBtn.nativeElement.click();

        fixture.detectChanges();

        expect(component.book.rating).toEqual(1);
        expect(ratingLbl.nativeElement.innerHTML).toEqual('1');
      });
    });
  });
});
