import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPerrosDetailComponent } from './mostrar-perros-detail.component';

describe('MostrarPerrosDetailComponent', () => {
  let component: MostrarPerrosDetailComponent;
  let fixture: ComponentFixture<MostrarPerrosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPerrosDetailComponent]
    });
    fixture = TestBed.createComponent(MostrarPerrosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
