import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceunitComponent } from './workspaceunit.component';

describe('WorkspaceunitComponent', () => {
  let component: WorkspaceunitComponent;
  let fixture: ComponentFixture<WorkspaceunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceunitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
