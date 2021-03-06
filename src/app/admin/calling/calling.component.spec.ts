/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CallingComponent } from './calling.component';

describe('CallingComponent', () => {
  let component: CallingComponent;
  let fixture: ComponentFixture<CallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
