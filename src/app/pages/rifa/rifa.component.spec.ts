/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RifaComponent } from './rifa.component';

describe('RifaComponent', () => {
  let component: RifaComponent;
  let fixture: ComponentFixture<RifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
