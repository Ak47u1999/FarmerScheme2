import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveBiddeeerComponent } from './admin-approve-biddeeer.component';

describe('AdminApproveBiddeeerComponent', () => {
  let component: AdminApproveBiddeeerComponent;
  let fixture: ComponentFixture<AdminApproveBiddeeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveBiddeeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveBiddeeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
