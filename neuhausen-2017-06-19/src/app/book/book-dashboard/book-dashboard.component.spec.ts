import { ClickOnceDirective } from './../../utilities/event-modifiers/click-once.directive';
import { BookDashboardComponent } from './book-dashboard.component';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';
import { BookService } from '../core/book.service';

import { BookGridElementComponent } from '../book-grid-element/book-grid-element.component';
import { BookGridComponent } from '../book-grid/book-grid.component';

describe('AppComponent', () => {
  describe('Integration Test', () => {
    const books = [
        new Book('394822324', 'Angular', ['Mîsko Hévéry']),
        new Book('394821323', 'Aurelia', ['Rob Eisenberg']),
        new Book('394843221', 'Vue.JS', ['André Staltz'])
    ];

    describe('When a book is rated', () => {
      let serviceSpy: jasmine.Spy;
      let bookService: BookService;
      let fixture: ComponentFixture<BookDashboardComponent>;
      let app: BookDashboardComponent;
      let btns: DebugElement[];

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [
            BookDashboardComponent,
            BookGridComponent,
            BookGridElementComponent,
            ClickOnceDirective
          ],
          imports: [HttpModule],
          providers: [BookService],
          schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(BookDashboardComponent);
        app = fixture.componentInstance;
        bookService = fixture.debugElement.injector.get(BookService);

        serviceSpy = spyOn(bookService, 'getAll').and.returnValue(Observable.of(books));

      });

      it('the book with the highest rating is the first item of the list', fakeAsync(() => {
        app.ngOnInit();
        tick();
        fixture.detectChanges();

        btns = fixture.debugElement.queryAll(By.css('[name=book-add-rate-up]'))
        btns[1].nativeElement.click()

        fixture.detectChanges();

        const bookTitles = fixture.debugElement.queryAll(By.css('.content > .title'));
        expect(bookTitles[0].nativeElement.innerHTML).toEqual('Aurelia');
      }));
    });
  });
});
