import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderwelcomepageComponent } from './bidderwelcomepage.component';

describe('BidderwelcomepageComponent', () => {
  let component: BidderwelcomepageComponent;
  let fixture: ComponentFixture<BidderwelcomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderwelcomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderwelcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
