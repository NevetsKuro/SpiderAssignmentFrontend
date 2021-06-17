import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPortalComponent } from './teacher-portal.component';

describe('TeacherPortalComponent', () => {
  let component: TeacherPortalComponent;
  let fixture: ComponentFixture<TeacherPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
