import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservabiajeComponent } from './reservabiaje.component';

describe('ReservabiajeComponent', () => {
  let component: ReservabiajeComponent;
  let fixture: ComponentFixture<ReservabiajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservabiajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservabiajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
