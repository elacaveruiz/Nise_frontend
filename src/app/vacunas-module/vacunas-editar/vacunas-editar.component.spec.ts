import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunasEditarComponent } from './vacunas-editar.component';

describe('VacunasEditarComponent', () => {
  let component: VacunasEditarComponent;
  let fixture: ComponentFixture<VacunasEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacunasEditarComponent]
    });
    fixture = TestBed.createComponent(VacunasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
