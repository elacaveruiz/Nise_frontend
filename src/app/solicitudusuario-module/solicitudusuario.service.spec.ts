import { TestBed } from '@angular/core/testing';

import { SolicitudusuarioService } from './solicitudusuario.service';

describe('SolicitudusuarioService', () => {
  let service: SolicitudusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
