import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunasDetailComponent } from './vacunas-detail.component';

describe('VacunasDetailComponent', () => {
  let component: VacunasDetailComponent;
  let fixture: ComponentFixture<VacunasDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacunasDetailComponent]
    });
    fixture = TestBed.createComponent(VacunasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
