import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInmobiliariaComponent } from './detalle-inmobiliaria.component';

describe('DetalleInmobiliariaComponent', () => {
  let component: DetalleInmobiliariaComponent;
  let fixture: ComponentFixture<DetalleInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleInmobiliariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
