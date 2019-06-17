import { TestBed, inject } from '@angular/core/testing';

import { ServicehttpService } from './servicehttp.service';

describe('ServicehttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicehttpService]
    });
  });

  it('should be created', inject([ServicehttpService], (service: ServicehttpService) => {
    expect(service).toBeTruthy();
  }));
});
