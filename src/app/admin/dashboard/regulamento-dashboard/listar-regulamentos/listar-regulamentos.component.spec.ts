import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRegulamentosComponent } from './listar-regulamentos.component';

describe('ListarRegulamentosComponent', () => {
  let component: ListarRegulamentosComponent;
  let fixture: ComponentFixture<ListarRegulamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRegulamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRegulamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
