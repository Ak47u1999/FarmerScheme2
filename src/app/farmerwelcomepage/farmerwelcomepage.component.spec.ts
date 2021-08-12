import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerwelcomepageComponent } from './farmerwelcomepage.component';

describe('FarmerwelcomepageComponent', () => {
  let component: FarmerwelcomepageComponent;
  let fixture: ComponentFixture<FarmerwelcomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerwelcomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerwelcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
