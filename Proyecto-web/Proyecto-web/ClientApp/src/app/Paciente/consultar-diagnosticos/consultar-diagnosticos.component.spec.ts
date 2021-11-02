import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDiagnosticosComponent } from './consultar-diagnosticos.component';

describe('ConsultarDiagnosticosComponent', () => {
  let component: ConsultarDiagnosticosComponent;
  let fixture: ComponentFixture<ConsultarDiagnosticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarDiagnosticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDiagnosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
