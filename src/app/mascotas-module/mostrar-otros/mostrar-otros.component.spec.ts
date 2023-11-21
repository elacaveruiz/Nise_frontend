import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOtrosComponent } from './mostrar-otros.component';

describe('MostrarOtrosComponent', () => {
  let component: MostrarOtrosComponent;
  let fixture: ComponentFixture<MostrarOtrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarOtrosComponent]
    });
    fixture = TestBed.createComponent(MostrarOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
