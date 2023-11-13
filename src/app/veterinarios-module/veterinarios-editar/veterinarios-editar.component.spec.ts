import { ComponentFixture, TestBed } from '@angular/core/testing';


import { VeterinariosEditarComponent } from './veterinarios-editar.component';


describe('VeterinariosEditarComponent', () => {
  let component: VeterinariosEditarComponent;
  let fixture: ComponentFixture<VeterinariosEditarComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariosEditarComponent]
    });
    fixture = TestBed.createComponent(VeterinariosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
