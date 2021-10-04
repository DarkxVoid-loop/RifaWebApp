/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NaviControllerItemsService } from './naviControllerItems.service';

describe('Service: NaviControllerItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaviControllerItemsService]
    });
  });

  it('should ...', inject([NaviControllerItemsService], (service: NaviControllerItemsService) => {
    expect(service).toBeTruthy();
  }));
});
