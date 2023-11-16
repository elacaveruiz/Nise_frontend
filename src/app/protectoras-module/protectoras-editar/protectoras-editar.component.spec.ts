import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectorasEditarComponent } from './protectoras-editar.component';

describe('ProtectorasEditarComponent', () => {
  let component: ProtectorasEditarComponent;
  let fixture: ComponentFixture<ProtectorasEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectorasEditarComponent]
    });
    fixture = TestBed.createComponent(ProtectorasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
