import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFootComponent } from './sidebar-foot.component';

describe('SidebarFootComponent', () => {
  let component: SidebarFootComponent;
  let fixture: ComponentFixture<SidebarFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
