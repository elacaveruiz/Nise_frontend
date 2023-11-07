import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProtectoraComponent } from './register-protectora.component';

describe('RegisterProtectoraComponent', () => {
  let component: RegisterProtectoraComponent;
  let fixture: ComponentFixture<RegisterProtectoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterProtectoraComponent]
    });
    fixture = TestBed.createComponent(RegisterProtectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
