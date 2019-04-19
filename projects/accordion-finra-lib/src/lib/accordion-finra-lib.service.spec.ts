import { TestBed } from '@angular/core/testing';

import { AccordionFinraLibService } from './accordion-finra-lib.service';

describe('AccordionFinraLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccordionFinraLibService = TestBed.get(AccordionFinraLibService);
    expect(service).toBeTruthy();
  });
});
