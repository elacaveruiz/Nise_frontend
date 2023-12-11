import { TestBed } from '@angular/core/testing';

import { GestionProtectoraService } from './gestion-protectora.service';

describe('GestionProtectoraService', () => {
  let service: GestionProtectoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionProtectoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
