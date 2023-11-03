import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasListarComponent } from './mascotas-listar.component';

describe('MascotasListarComponent', () => {
  let component: MascotasListarComponent;
  let fixture: ComponentFixture<MascotasListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasListarComponent]
    });
    fixture = TestBed.createComponent(MascotasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
