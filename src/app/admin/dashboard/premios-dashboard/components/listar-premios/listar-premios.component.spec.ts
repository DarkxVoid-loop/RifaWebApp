import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPremiosComponent } from './listar-premios.component';

describe('ListarPremiosComponent', () => {
  let component: ListarPremiosComponent;
  let fixture: ComponentFixture<ListarPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPremiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
