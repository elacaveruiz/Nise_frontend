import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDetailModalComponent } from './solicitud-detail-modal.component';

describe('SolicitudDetailModalComponent', () => {
  let component: SolicitudDetailModalComponent;
  let fixture: ComponentFixture<SolicitudDetailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudDetailModalComponent]
    });
    fixture = TestBed.createComponent(SolicitudDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
