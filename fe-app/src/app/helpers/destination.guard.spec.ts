import { TestBed } from '@angular/core/testing';

import { DestinationGuard } from './destination.guard';

describe('DestinationGuard', () => {
  let guard: DestinationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DestinationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
