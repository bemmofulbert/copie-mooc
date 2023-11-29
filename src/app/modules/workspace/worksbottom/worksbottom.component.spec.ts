import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksbottomComponent } from './worksbottom.component';

describe('WorksbottomComponent', () => {
  let component: WorksbottomComponent;
  let fixture: ComponentFixture<WorksbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksbottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
