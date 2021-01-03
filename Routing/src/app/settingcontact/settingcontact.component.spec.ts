import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingcontactComponent } from './settingcontact.component';

describe('SettingcontactComponent', () => {
  let component: SettingcontactComponent;
  let fixture: ComponentFixture<SettingcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
