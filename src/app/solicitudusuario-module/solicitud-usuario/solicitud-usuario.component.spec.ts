import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudUsuarioComponent } from './solicitud-usuario.component';

describe('SolicitudUsuarioComponent', () => {
  let component: SolicitudUsuarioComponent;
  let fixture: ComponentFixture<SolicitudUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudUsuarioComponent]
    });
    fixture = TestBed.createComponent(SolicitudUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
