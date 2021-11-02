import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPsicologoComponent } from './menu-psicologo.component';

describe('MenuPsicologoComponent', () => {
  let component: MenuPsicologoComponent;
  let fixture: ComponentFixture<MenuPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
