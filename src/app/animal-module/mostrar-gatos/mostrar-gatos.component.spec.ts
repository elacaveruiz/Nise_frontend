import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGatosComponent } from './mostrar-gatos.component';

describe('MostrarGatosComponent', () => {
  let component: MostrarGatosComponent;
  let fixture: ComponentFixture<MostrarGatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarGatosComponent]
    });
    fixture = TestBed.createComponent(MostrarGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
