import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectoraRegistroComponent } from './protectora-registro.component';

describe('ProtectoraRegistroComponent', () => {
  let component: ProtectoraRegistroComponent;
  let fixture: ComponentFixture<ProtectoraRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectoraRegistroComponent]
    });
    fixture = TestBed.createComponent(ProtectoraRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
