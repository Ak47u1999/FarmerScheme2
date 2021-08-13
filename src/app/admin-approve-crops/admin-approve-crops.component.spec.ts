import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveCropsComponent } from './admin-approve-crops.component';

describe('AdminApproveCropsComponent', () => {
  let component: AdminApproveCropsComponent;
  let fixture: ComponentFixture<AdminApproveCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveCropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
