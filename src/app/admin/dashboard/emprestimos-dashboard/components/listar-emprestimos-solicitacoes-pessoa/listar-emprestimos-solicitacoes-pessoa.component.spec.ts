import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmprestimosSolicitacoesPessoaComponent } from './listar-emprestimos-solicitacoes-pessoa.component';

describe('ListarEmprestimosSolicitacoesPessoaComponent', () => {
  let component: ListarEmprestimosSolicitacoesPessoaComponent;
  let fixture: ComponentFixture<ListarEmprestimosSolicitacoesPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmprestimosSolicitacoesPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmprestimosSolicitacoesPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
