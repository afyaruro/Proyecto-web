import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertarTalleresComponent } from './ofertar-talleres.component';

describe('OfertarTalleresComponent', () => {
  let component: OfertarTalleresComponent;
  let fixture: ComponentFixture<OfertarTalleresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertarTalleresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertarTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
