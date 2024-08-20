import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorExperienceComponent } from './instructor-experience.component';

describe('InstructorExperienceComponent', () => {
  let component: InstructorExperienceComponent;
  let fixture: ComponentFixture<InstructorExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorExperienceComponent]
    });
    fixture = TestBed.createComponent(InstructorExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
