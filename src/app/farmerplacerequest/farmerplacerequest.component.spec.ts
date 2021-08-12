import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerplacerequestComponent } from './farmerplacerequest.component';

describe('FarmerplacerequestComponent', () => {
  let component: FarmerplacerequestComponent;
  let fixture: ComponentFixture<FarmerplacerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerplacerequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerplacerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
