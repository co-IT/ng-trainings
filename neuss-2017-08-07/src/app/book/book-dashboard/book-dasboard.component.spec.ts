import { By } from '@angular/platform-browser/';
import { Observable } from 'rxjs/Observable';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './../core/book.service';
import { ClickOnceDirective } from './../../utilities/event-modifiers/click-once.directive';
import { BookGridElementComponent } from './../book-grid-element/book-grid-element.component';
import { BookGridComponent } from './../book-grid/book-grid.component';
import { BookDashboardComponent } from './book-dashboard.component';
import { Book } from '../book';
import { TestBed, ComponentFixture, fakeAsync, tick  } from '@angular/core/testing';

import 'rxjs/add/observable/of';

describe('BookDashboardComponent', () => {
  let fixture: ComponentFixture<BookDashboardComponent>;
  let component: BookDashboardComponent;

  let bookService: BookService;
  let serviceSpy: jasmine.Spy;

  let rateUpBtns: DebugElement[];

  const books = [
    new Book('The Willpower Instinct', '', '', '', [], ''),
    new Book('Harry Potter', '', '', '', [], '')
  ];

  describe('When a book is rated', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          BookDashboardComponent,
          BookGridComponent,
          BookGridElementComponent,
          ClickOnceDirective
        ],
        providers: [BookService],
        imports: [HttpClientModule],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();

      fixture = TestBed.createComponent(BookDashboardComponent);
      component = fixture.componentInstance;

      bookService = fixture.debugElement.injector.get(BookService);

      serviceSpy = spyOn(bookService, 'all').and.returnValue(Observable.of(books));
    });

    it('the book with the highest rating is the first item in the grid', fakeAsync(() => {
      component.ngOnInit();
      tick(); // all async tasks are done
      fixture.detectChanges(); // books are drawn in the browser

      // get all rateUp Buttons of BookGridElements
      rateUpBtns = fixture.debugElement.queryAll(By.css('[name=book-add-rate-up]'));

      // click rate up button of last BookGridElement
      (rateUpBtns[1].nativeElement as HTMLButtonElement).click();

      fixture.detectChanges();

      const bookTitles = fixture.debugElement.queryAll(By.css('.title'));
      expect(bookTitles[0].nativeElement.innerHTML).toBe('Harry Potter');
    }));
  });
});
