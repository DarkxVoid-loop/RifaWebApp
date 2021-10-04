import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteioDashboardComponent } from './sorteio-dashboard.component';

describe('SorteioDashboardComponent', () => {
  let component: SorteioDashboardComponent;
  let fixture: ComponentFixture<SorteioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteioDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
