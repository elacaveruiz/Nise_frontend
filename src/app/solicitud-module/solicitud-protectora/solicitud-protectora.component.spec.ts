import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudProtectoraComponent } from './solicitud-protectora.component';

describe('SolicitudProtectoraComponent', () => {
  let component: SolicitudProtectoraComponent;
  let fixture: ComponentFixture<SolicitudProtectoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudProtectoraComponent]
    });
    fixture = TestBed.createComponent(SolicitudProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
