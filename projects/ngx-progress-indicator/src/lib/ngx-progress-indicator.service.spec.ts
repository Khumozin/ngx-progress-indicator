import { TestBed } from '@angular/core/testing';

import { NgxProgressIndicatorConfig } from './ngx-progress-indicator-config.model';
import { NgxProgressIndicatorService } from './ngx-progress-indicator.service';

const config: NgxProgressIndicatorConfig = {
  size: 2,
  color: '#9E8A33',
  className: 'ngx-progress-indicator',
  delay: 80,
};

fdescribe('NgxProgressIndicatorService', () => {
  let service: NgxProgressIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NgxProgressIndicatorConfig,
          useValue: config,
        },
      ],
    });
    service = TestBed.inject(NgxProgressIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show and hide ngx-progress-indicator', () => {
    service.start();

    service.finish();
  });
});
