import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFarmerComponent } from './registration-farmer.component';

describe('RegistrationFarmerComponent', () => {
  let component: RegistrationFarmerComponent;
  let fixture: ComponentFixture<RegistrationFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
