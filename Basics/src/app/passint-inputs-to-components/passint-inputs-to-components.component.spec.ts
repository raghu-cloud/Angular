import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassintInputsToComponentsComponent } from './passint-inputs-to-components.component';

describe('PassintInputsToComponentsComponent', () => {
  let component: PassintInputsToComponentsComponent;
  let fixture: ComponentFixture<PassintInputsToComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassintInputsToComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassintInputsToComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
