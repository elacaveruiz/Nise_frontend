import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunasListarComponent } from './vacunas-listar.component';

describe('VacunasListarComponent', () => {
  let component: VacunasListarComponent;
  let fixture: ComponentFixture<VacunasListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacunasListarComponent]
    });
    fixture = TestBed.createComponent(VacunasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
