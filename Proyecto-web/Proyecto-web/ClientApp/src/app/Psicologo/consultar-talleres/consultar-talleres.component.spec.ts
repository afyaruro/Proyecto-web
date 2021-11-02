import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTalleresComponent } from './consultar-talleres.component';

describe('ConsultarTalleresComponent', () => {
  let component: ConsultarTalleresComponent;
  let fixture: ComponentFixture<ConsultarTalleresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarTalleresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
