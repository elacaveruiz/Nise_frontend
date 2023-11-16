import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectorasCrearComponent } from './protectoras-crear.component';

describe('ProtectorasCrearComponent', () => {
  let component: ProtectorasCrearComponent;
  let fixture: ComponentFixture<ProtectorasCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectorasCrearComponent]
    });
    fixture = TestBed.createComponent(ProtectorasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
