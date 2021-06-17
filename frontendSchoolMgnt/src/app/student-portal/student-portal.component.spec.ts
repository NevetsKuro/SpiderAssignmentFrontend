import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPortalComponent } from './student-portal.component';

describe('StudentPortalComponent', () => {
  let component: StudentPortalComponent;
  let fixture: ComponentFixture<StudentPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
