import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmprestimosPessoasSolicitacoesComponent } from './listar-emprestimos-pessoas-solicitacoes.component';

describe('ListarEmprestimosPessoasSolicitacoesComponent', () => {
  let component: ListarEmprestimosPessoasSolicitacoesComponent;
  let fixture: ComponentFixture<ListarEmprestimosPessoasSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmprestimosPessoasSolicitacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmprestimosPessoasSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
