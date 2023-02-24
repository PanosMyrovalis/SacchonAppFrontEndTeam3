import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmeasurementComponent } from './viewmeasurement.component';

describe('ViewmeasurementComponent', () => {
  let component: ViewmeasurementComponent;
  let fixture: ComponentFixture<ViewmeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmeasurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
