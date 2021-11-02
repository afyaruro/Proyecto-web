import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseTallerComponent } from './registrarse-taller.component';

describe('RegistrarseTallerComponent', () => {
  let component: RegistrarseTallerComponent;
  let fixture: ComponentFixture<RegistrarseTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarseTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarseTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
