import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowModalComponent } from './book-now-modal.component';

describe('BookNowModalComponent', () => {
  let component: BookNowModalComponent;
  let fixture: ComponentFixture<BookNowModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookNowModalComponent]
    });
    fixture = TestBed.createComponent(BookNowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
