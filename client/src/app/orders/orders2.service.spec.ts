import { TestBed } from '@angular/core/testing';

import { Orders2Service } from './orders2.service';

describe('Orders2Service', () => {
  let service: Orders2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Orders2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
