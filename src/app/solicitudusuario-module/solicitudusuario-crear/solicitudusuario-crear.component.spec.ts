import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudusuarioCrearComponent } from './solicitudusuario-crear.component';

describe('SolicitudusuarioCrearComponent', () => {
  let component: SolicitudusuarioCrearComponent;
  let fixture: ComponentFixture<SolicitudusuarioCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudusuarioCrearComponent]
    });
    fixture = TestBed.createComponent(SolicitudusuarioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
