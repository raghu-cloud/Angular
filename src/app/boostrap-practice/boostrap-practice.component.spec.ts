import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapPracticeComponent } from './boostrap-practice.component';

describe('BoostrapPracticeComponent', () => {
  let component: BoostrapPracticeComponent;
  let fixture: ComponentFixture<BoostrapPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostrapPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
