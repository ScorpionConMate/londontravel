import { TestBed } from '@angular/core/testing';

import { Authv2Guard } from './authv2.guard';

describe('Authv2Guard', () => {
  let guard: Authv2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Authv2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
