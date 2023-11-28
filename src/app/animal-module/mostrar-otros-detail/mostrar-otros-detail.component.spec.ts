import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOtrosDetailComponent } from './mostrar-otros-detail.component';

describe('MostrarOtrosDetailComponent', () => {
  let component: MostrarOtrosDetailComponent;
  let fixture: ComponentFixture<MostrarOtrosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarOtrosDetailComponent]
    });
    fixture = TestBed.createComponent(MostrarOtrosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
