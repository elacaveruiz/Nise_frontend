import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDetailEditarModalComponent } from './solicitud-detail-editar-modal.component';

describe('SolicitudDetailEditarModalComponent', () => {
  let component: SolicitudDetailEditarModalComponent;
  let fixture: ComponentFixture<SolicitudDetailEditarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudDetailEditarModalComponent]
    });
    fixture = TestBed.createComponent(SolicitudDetailEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
