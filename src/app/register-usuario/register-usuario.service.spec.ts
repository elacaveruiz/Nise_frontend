import { TestBed } from '@angular/core/testing';

import { RegisterUsuarioService } from './register-usuario.service';

describe('RegisterUsuarioService', () => {
  let service: RegisterUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
