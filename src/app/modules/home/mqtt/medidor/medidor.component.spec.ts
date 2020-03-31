import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidorComponent } from './medidor.component';

describe('MedidorComponent', () => {
  let component: MedidorComponent;
  let fixture: ComponentFixture<MedidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
