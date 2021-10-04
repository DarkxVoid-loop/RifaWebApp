import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulamentoDashboardComponent } from './regulamento-dashboard.component';

describe('RegulamentoDashboardComponent', () => {
  let component: RegulamentoDashboardComponent;
  let fixture: ComponentFixture<RegulamentoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulamentoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulamentoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
