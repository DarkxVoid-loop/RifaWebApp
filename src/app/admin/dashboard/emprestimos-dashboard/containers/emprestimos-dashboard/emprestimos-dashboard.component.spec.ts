import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimosDashboardComponent } from './emprestimos-dashboard.component';

describe('EmprestimosDashboardComponent', () => {
  let component: EmprestimosDashboardComponent;
  let fixture: ComponentFixture<EmprestimosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprestimosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
