import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPerrosComponent } from './mostrar-perros.component';

describe('MostrarPerrosComponent', () => {
  let component: MostrarPerrosComponent;
  let fixture: ComponentFixture<MostrarPerrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPerrosComponent]
    });
    fixture = TestBed.createComponent(MostrarPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
