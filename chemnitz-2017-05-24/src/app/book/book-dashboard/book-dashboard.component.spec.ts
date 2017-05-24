import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDashboardComponent } from './book-dashboard.component';

describe('BookDashboardComponent', () => {
  let component: BookDashboardComponent;
  let fixture: ComponentFixture<BookDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
