import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationBidderAddressComponent } from './registration-bidder-address.component';

describe('RegistrationBidderAddressComponent', () => {
  let component: RegistrationBidderAddressComponent;
  let fixture: ComponentFixture<RegistrationBidderAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationBidderAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationBidderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
