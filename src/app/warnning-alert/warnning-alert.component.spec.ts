import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnningAlertComponent } from './warnning-alert.component';

describe('WarnningAlertComponent', () => {
  let component: WarnningAlertComponent;
  let fixture: ComponentFixture<WarnningAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarnningAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
