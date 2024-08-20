import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumHighlightsComponent } from './curriculum-highlights.component';

describe('CurriculumHighlightsComponent', () => {
  let component: CurriculumHighlightsComponent;
  let fixture: ComponentFixture<CurriculumHighlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumHighlightsComponent]
    });
    fixture = TestBed.createComponent(CurriculumHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
