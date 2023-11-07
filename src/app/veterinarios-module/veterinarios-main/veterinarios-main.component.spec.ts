import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosMainComponent } from './veterinarios-main.component';

describe('VeterinariosMainComponent', () => {
  let component: VeterinariosMainComponent;
  let fixture: ComponentFixture<VeterinariosMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariosMainComponent]
    });
    fixture = TestBed.createComponent(VeterinariosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
