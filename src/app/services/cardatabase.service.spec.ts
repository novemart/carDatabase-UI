import { TestBed } from '@angular/core/testing';

import { CardatabaseService } from './cardatabase.service';

describe('CardatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardatabaseService = TestBed.get(CardatabaseService);
    expect(service).toBeTruthy();
  });
});
