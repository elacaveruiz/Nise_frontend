import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosDetailComponent } from './veterinarios-detail.component';

describe('VeterinariosDetailComponent', () => {
  let component: VeterinariosDetailComponent;
  let fixture: ComponentFixture<VeterinariosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariosDetailComponent]
    });
    fixture = TestBed.createComponent(VeterinariosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//revisar paths
