import { TestBed } from '@angular/core/testing';

import { RegisterProtectoraService } from './register-protectora.service';

describe('RegisterProtectoraService', () => {
  let service: RegisterProtectoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterProtectoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
