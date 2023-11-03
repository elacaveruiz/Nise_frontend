import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunasCrearComponent } from './vacunas-crear.component';

describe('VacunasCrearComponent', () => {
  let component: VacunasCrearComponent;
  let fixture: ComponentFixture<VacunasCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacunasCrearComponent]
    });
    fixture = TestBed.createComponent(VacunasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
