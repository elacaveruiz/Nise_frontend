import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudusuarioListarComponent } from './solicitudusuario-listar.component';

describe('SolicitudusuarioListarComponent', () => {
  let component: SolicitudusuarioListarComponent;
  let fixture: ComponentFixture<SolicitudusuarioListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudusuarioListarComponent]
    });
    fixture = TestBed.createComponent(SolicitudusuarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
