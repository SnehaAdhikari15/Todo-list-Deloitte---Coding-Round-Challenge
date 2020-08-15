import { TestBed } from '@angular/core/testing';

import { HttpconfigInterceptorService } from './httpconfig-interceptor.service';

describe('HttpconfigInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpconfigInterceptorService = TestBed.get(HttpconfigInterceptorService);
    expect(service).toBeTruthy();
  });
});
