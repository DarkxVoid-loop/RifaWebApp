import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSorteioComponent } from './listar-sorteio.component';

describe('ListarSorteioComponent', () => {
  let component: ListarSorteioComponent;
  let fixture: ComponentFixture<ListarSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSorteioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
