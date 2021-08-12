import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationBidderComponent } from './registration-bidder.component';

describe('RegistrationBidderComponent', () => {
  let component: RegistrationBidderComponent;
  let fixture: ComponentFixture<RegistrationBidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationBidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
