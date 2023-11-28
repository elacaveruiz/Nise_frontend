import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCrearComponent } from './animal-crear.component';

describe('AnimalCrearComponent', () => {
  let component: AnimalCrearComponent;
  let fixture: ComponentFixture<AnimalCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalCrearComponent]
    });
    fixture = TestBed.createComponent(AnimalCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
