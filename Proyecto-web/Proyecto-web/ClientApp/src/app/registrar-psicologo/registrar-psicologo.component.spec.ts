import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPsicologoComponent } from './registrar-psicologo.component';

describe('RegistrarPsicologoComponent', () => {
  let component: RegistrarPsicologoComponent;
  let fixture: ComponentFixture<RegistrarPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
