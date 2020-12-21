import { TestBed } from '@angular/core/testing';

import { FoodFactsService } from './food-facts.service';

describe('FoodFactsService', () => {
  let service: FoodFactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodFactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
