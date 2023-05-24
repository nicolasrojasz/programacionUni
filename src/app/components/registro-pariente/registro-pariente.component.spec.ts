import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroParienteComponent } from './registro-pariente.component';

describe('RegistroParienteComponent', () => {
  let component: RegistroParienteComponent;
  let fixture: ComponentFixture<RegistroParienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroParienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroParienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
