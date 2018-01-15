import { TestBed, inject } from '@angular/core/testing';

import { VbSetService } from './vb-set.service';

describe('VbSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VbSetService]
    });
  });

  it('should be created', inject([VbSetService], (service: VbSetService) => {
    expect(service).toBeTruthy();
  }));
});
