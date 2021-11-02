import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrasePacienteComponent } from './registrase-paciente.component';

describe('RegistrasePacienteComponent', () => {
  let component: RegistrasePacienteComponent;
  let fixture: ComponentFixture<RegistrasePacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrasePacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrasePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
