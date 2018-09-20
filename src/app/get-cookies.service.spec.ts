import { TestBed, inject } from '@angular/core/testing';

import { GetCookiesService } from './get-cookies.service';

describe('GetCookiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCookiesService]
    });
  });

  it('should be created', inject([GetCookiesService], (service: GetCookiesService) => {
    expect(service).toBeTruthy();
  }));
});
