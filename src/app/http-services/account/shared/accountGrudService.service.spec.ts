/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountGrudServiceService } from './accountGrudService.service';

describe('Service: AccountGrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountGrudServiceService]
    });
  });

  it('should ...', inject([AccountGrudServiceService], (service: AccountGrudServiceService) => {
    expect(service).toBeTruthy();
  }));
});
