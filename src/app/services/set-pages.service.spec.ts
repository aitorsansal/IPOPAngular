import { TestBed } from '@angular/core/testing';

import { SetPagesService } from './set-pages.service';

describe('SetPagesService', () => {
  let service: SetPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
