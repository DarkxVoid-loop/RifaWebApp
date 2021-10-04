import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSorteioComponent } from './cadastrar-sorteio.component';

describe('CadastrarSorteioComponent', () => {
  let component: CadastrarSorteioComponent;
  let fixture: ComponentFixture<CadastrarSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarSorteioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
