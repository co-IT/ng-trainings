import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddFormComponent } from './book-add-form.component';

describe('BookAddFormComponent', () => {
  let component: BookAddFormComponent;
  let fixture: ComponentFixture<BookAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
