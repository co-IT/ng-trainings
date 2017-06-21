<<<<<<< HEAD
import { ClickOnceDirective } from './../../utilities/event-modifiers/click-once.directive';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from 'app/book/models/book';
import { BookGridElementComponent } from './book-grid-element.component';

describe('BookGridElementComponent', () => {
  describe('Unit Test', () => {
    describe('When a book is rated down', () => {
      it('the rating is equal to 0', () => {
        const component = new BookGridElementComponent();
        component.book = Book.empty();

        component.rateDown();

        expect(component.book.rating).toEqual(0);
=======
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
>>>>>>> (component:grid-element) add one unit and one shallow test
      });
    });
  });

<<<<<<< HEAD
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
        // <button (click-once)="rateUp()"
        //         name="book-add-rate-up>+</button>

        rateUpBtn.nativeElement.click();
        fixture.detectChanges();

        // <div class="rating">1</div>
=======
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

      rateUpBtn = fixture.debugElement.query(By.css('[name=book-add-rate-up]'));
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
