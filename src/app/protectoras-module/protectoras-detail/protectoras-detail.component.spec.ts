import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectorasDetailComponent } from './protectoras-detail.component';

describe('ProtectorasDetailComponent', () => {
  let component: ProtectorasDetailComponent;
  let fixture: ComponentFixture<ProtectorasDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectorasDetailComponent]
    });
    fixture = TestBed.createComponent(ProtectorasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
