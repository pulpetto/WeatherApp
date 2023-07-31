import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysInfoComponent } from './todays-info.component';

describe('TodaysInfoComponent', () => {
  let component: TodaysInfoComponent;
  let fixture: ComponentFixture<TodaysInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysInfoComponent]
    });
    fixture = TestBed.createComponent(TodaysInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
