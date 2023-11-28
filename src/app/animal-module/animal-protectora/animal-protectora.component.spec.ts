import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalProtectoraComponent } from './animal-protectora.component';

describe('AnimalProtectoraComponent', () => {
  let component: AnimalProtectoraComponent;
  let fixture: ComponentFixture<AnimalProtectoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalProtectoraComponent]
    });
    fixture = TestBed.createComponent(AnimalProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
