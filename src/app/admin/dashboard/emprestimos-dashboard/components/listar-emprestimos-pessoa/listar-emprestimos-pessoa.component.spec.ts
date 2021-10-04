import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmprestimosPessoaComponent } from './listar-emprestimos-pessoa.component';

describe('ListarEmprestimosPessoaComponent', () => {
  let component: ListarEmprestimosPessoaComponent;
  let fixture: ComponentFixture<ListarEmprestimosPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmprestimosPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmprestimosPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
