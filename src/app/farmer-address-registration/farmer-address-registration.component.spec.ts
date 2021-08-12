import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAddressRegistrationComponent } from './farmer-address-registration.component';

describe('FarmerAddressRegistrationComponent', () => {
  let component: FarmerAddressRegistrationComponent;
  let fixture: ComponentFixture<FarmerAddressRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAddressRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAddressRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
