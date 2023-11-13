import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosCrearComponent } from './veterinarios-crear.component';

describe('VeterinariosCrearComponent', () => {
  let component: VeterinariosCrearComponent;
  let fixture: ComponentFixture<VeterinariosCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariosCrearComponent]
    });
    fixture = TestBed.createComponent(VeterinariosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


