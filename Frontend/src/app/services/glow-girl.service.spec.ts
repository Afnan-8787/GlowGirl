import { TestBed } from '@angular/core/testing';

import { GlowGirlService } from './glow-girl.service';

describe('GlowGirlService', () => {
  let service: GlowGirlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlowGirlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
