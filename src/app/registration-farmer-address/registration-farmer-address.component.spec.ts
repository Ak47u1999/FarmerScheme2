import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFarmerAddressComponent } from './registration-farmer-address.component';

describe('RegistrationFarmerAddressComponent', () => {
  let component: RegistrationFarmerAddressComponent;
  let fixture: ComponentFixture<RegistrationFarmerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFarmerAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFarmerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
