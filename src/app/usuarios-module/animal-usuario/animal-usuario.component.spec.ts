import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalUsuarioComponent } from './animal-usuario.component';

describe('AnimalUsuarioComponent', () => {
  let component: AnimalUsuarioComponent;
  let fixture: ComponentFixture<AnimalUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalUsuarioComponent]
    });
    fixture = TestBed.createComponent(AnimalUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
