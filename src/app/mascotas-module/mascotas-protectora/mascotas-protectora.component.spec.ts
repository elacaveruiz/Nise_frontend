import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasProtectoraComponent } from './mascotas-protectora.component';

describe('MascotasProtectoraComponent', () => {
  let component: MascotasProtectoraComponent;
  let fixture: ComponentFixture<MascotasProtectoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasProtectoraComponent]
    });
    fixture = TestBed.createComponent(MascotasProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
