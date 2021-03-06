import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPacienteComponent } from './consulta-paciente.component';

describe('ConsultaPacienteComponent', () => {
  let component: ConsultaPacienteComponent;
  let fixture: ComponentFixture<ConsultaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
