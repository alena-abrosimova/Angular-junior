import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxPassComponent } from './check-box-pass.component';

describe('CheckBoxPassComponent', () => {
  let component: CheckBoxPassComponent;
  let fixture: ComponentFixture<CheckBoxPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
