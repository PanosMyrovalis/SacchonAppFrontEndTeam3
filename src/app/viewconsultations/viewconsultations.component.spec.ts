import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsultationsComponent } from './viewconsultations.component';

describe('ViewconsultationsComponent', () => {
  let component: ViewconsultationsComponent;
  let fixture: ComponentFixture<ViewconsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewconsultationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewconsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
