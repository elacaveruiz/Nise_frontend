import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGatosDetailComponent } from './mostrar-gatos-detail.component';

describe('MostrarGatosDetailComponent', () => {
  let component: MostrarGatosDetailComponent;
  let fixture: ComponentFixture<MostrarGatosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarGatosDetailComponent]
    });
    fixture = TestBed.createComponent(MostrarGatosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
