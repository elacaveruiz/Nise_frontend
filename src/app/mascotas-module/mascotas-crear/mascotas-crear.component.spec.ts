import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasCrearComponent } from './mascotas-crear.component';

describe('MascotasCrearComponent', () => {
  let component: MascotasCrearComponent;
  let fixture: ComponentFixture<MascotasCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasCrearComponent]
    });
    fixture = TestBed.createComponent(MascotasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
