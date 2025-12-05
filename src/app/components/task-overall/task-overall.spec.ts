import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOverall } from './task-overall';

describe('TaskOverall', () => {
  let component: TaskOverall;
  let fixture: ComponentFixture<TaskOverall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskOverall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskOverall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
