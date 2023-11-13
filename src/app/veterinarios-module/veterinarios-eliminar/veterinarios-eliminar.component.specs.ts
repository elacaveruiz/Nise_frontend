import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosEliminarComponent } from './veterinarios-eliminar.component';

describe('VeterinariosEliminarComponent', () => {
  let component: VeterinariosEliminarComponent;
  let fixture: ComponentFixture<VeterinariosEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariosEliminarComponent]
    });
    fixture = TestBed.createComponent(VeterinariosEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});