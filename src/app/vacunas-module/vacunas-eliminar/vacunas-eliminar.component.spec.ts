import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunasEliminarComponent } from './vacunas-eliminar.component';

describe('VacunasEliminarComponent', () => {
  let component: VacunasEliminarComponent;
  let fixture: ComponentFixture<VacunasEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacunasEliminarComponent]
    });
    fixture = TestBed.createComponent(VacunasEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
