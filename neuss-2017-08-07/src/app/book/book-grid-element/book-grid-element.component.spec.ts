import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BookGridElementComponent } from './book-grid-element.component';
import { ClickOnceDirective } from './../../utilities/event-modifiers/click-once.directive';

import { Book } from '../book';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser/';

describe('BookGridElementComponent', () => {

  describe('Unit Test', () => {

    describe('When a book is rated down', () => {
      let component: BookGridElementComponent;

      beforeEach(() => {
        component = new BookGridElementComponent();

        const book = Book.empty();
        book.rating = 3;

        component.data = book;
      });

      it('the rating is decreased by one', () => {
        component.rateDown();
        expect(component.data.rating).toBe(2);
      });

      it('fires the event (rate)', () => {
        const rate = spyOn(component.rate, 'emit');
        component.rateDown();

        expect(rate).toHaveBeenCalled();
      });
    });
  });

  describe('Shallow Test', () => {
    let fixture: ComponentFixture<BookGridElementComponent>;
    let component: BookGridElementComponent;

    let rateUpBtn, ratingLbl;

    describe('When a book is rated up', () => {
      beforeEach(() => {
        // create & compile module for test
        TestBed.configureTestingModule({
          declarations: [
            BookGridElementComponent,
            ClickOnceDirective
          ],
          schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(BookGridElementComponent);

        component = fixture.componentInstance;

        rateUpBtn = fixture.debugElement
                      .query(By.css('[name=book-add-rate-up]'));

        ratingLbl = fixture.debugElement
                      .query(By.css('.rating'));
      });

      it('the rating is increased by one', () => {
        component.data = Book.empty();
        fixture.detectChanges();

        rateUpBtn.nativeElement.click();
        fixture.detectChanges();

        expect(ratingLbl.nativeElement.innerHTML).toBe('1');
      });
    });
  });
});
