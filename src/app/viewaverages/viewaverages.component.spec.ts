import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaveragesComponent } from './viewaverages.component';

describe('ViewaveragesComponent', () => {
  let component: ViewaveragesComponent;
  let fixture: ComponentFixture<ViewaveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaveragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewaveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
