import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosDashboardComponent } from './pagamentos-dashboard.component';

describe('PagamentosDashboardComponent', () => {
  let component: PagamentosDashboardComponent;
  let fixture: ComponentFixture<PagamentosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
