import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesLessons } from './modules-lessons';

describe('ModulesLessons', () => {
  let component: ModulesLessons;
  let fixture: ComponentFixture<ModulesLessons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesLessons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesLessons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
