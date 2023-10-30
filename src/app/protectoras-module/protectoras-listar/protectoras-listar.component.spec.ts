import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectorasListarComponent } from './protectoras-listar.component';

describe('ProtectorasListarComponent', () => {
  let component: ProtectorasListarComponent;
  let fixture: ComponentFixture<ProtectorasListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectorasListarComponent]
    });
    fixture = TestBed.createComponent(ProtectorasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
