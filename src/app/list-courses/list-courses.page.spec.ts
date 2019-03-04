import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursesPage } from './list-courses.page';

describe('ListCoursesPage', () => {
  let component: ListCoursesPage;
  let fixture: ComponentFixture<ListCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
