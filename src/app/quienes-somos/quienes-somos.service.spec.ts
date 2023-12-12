import { TestBed } from '@angular/core/testing';

import { QuienesService } from './quienes-somos.service';

describe('UsuarioService', () => {
  let service: QuienesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuienesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
