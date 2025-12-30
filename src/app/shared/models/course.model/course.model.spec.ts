import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModel } from './course.model';

describe('CourseModel', () => {
  let component: CourseModel;
  let fixture: ComponentFixture<CourseModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
