import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocurriculumComponent } from './videocurriculum.component';

describe('VideocurriculumComponent', () => {
  let component: VideocurriculumComponent;
  let fixture: ComponentFixture<VideocurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideocurriculumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideocurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
