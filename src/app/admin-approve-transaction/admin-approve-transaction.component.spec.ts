import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveTransactionComponent } from './admin-approve-transaction.component';

describe('AdminApproveTransactionComponent', () => {
  let component: AdminApproveTransactionComponent;
  let fixture: ComponentFixture<AdminApproveTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
