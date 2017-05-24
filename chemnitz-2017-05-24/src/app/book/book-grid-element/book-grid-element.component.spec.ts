import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGridElementComponent } from './book-grid-element.component';

describe('BookGridElementComponent', () => {
  let component: BookGridElementComponent;
  let fixture: ComponentFixture<BookGridElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGridElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGridElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
