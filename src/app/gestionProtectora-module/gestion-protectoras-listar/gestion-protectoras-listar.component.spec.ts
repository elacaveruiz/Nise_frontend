import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProtectorasListarComponent } from './gestion-protectoras-listar.component';

describe('GestionProtectorasListarComponent', () => {
  let component: GestionProtectorasListarComponent;
  let fixture: ComponentFixture<GestionProtectorasListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProtectorasListarComponent]
    });
    fixture = TestBed.createComponent(GestionProtectorasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
