import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedInfoComponent } from './tabbed-info.component';

describe('TabbedInfoComponent', () => {
  let component: TabbedInfoComponent;
  let fixture: ComponentFixture<TabbedInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabbedInfoComponent]
    });
    fixture = TestBed.createComponent(TabbedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
