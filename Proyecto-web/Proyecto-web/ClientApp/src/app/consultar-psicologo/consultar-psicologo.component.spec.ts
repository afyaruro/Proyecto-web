import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPsicologoComponent } from './consultar-psicologo.component';

describe('ConsultarPsicologoComponent', () => {
  let component: ConsultarPsicologoComponent;
  let fixture: ComponentFixture<ConsultarPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
