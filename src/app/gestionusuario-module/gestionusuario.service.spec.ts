import { TestBed } from '@angular/core/testing';

import { GestionusuarioService } from './gestionusuario.service';

describe('GestionusuarioService', () => {
  let service: GestionusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
