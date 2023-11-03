import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosListarComponent } from './veterinarios-listar.component';

describe('VeterinariosListarComponent', () => {
  let component: VeterinariosListarComponent;
  let fixture: ComponentFixture<VeterinariosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariosListarComponent]
    });
    fixture = TestBed.createComponent(VeterinariosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
