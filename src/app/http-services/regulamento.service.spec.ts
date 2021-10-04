/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegulamentoService } from './regulamento.service';

describe('Service: Regulamento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegulamentoService]
    });
  });

  it('should ...', inject([RegulamentoService], (service: RegulamentoService) => {
    expect(service).toBeTruthy();
  }));
});
