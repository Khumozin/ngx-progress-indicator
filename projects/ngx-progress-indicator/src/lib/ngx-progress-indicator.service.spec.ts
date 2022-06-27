import { TestBed } from '@angular/core/testing';

import { NgxProgressIndicatorService } from './ngx-progress-indicator.service';

describe('NgxProgressIndicatorService', () => {
  let service: NgxProgressIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProgressIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
