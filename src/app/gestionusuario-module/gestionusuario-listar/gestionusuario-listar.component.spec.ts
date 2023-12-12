import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionusuarioListarComponent } from './gestionusuario-listar.component';

describe('GestionusuarioListarComponent', () => {
  let component: GestionusuarioListarComponent;
  let fixture: ComponentFixture<GestionusuarioListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionusuarioListarComponent]
    });
    fixture = TestBed.createComponent(GestionusuarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
