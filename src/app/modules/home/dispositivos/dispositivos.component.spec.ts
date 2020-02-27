import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivosComponent } from './dispositivos.component';
import { HttpClientModule } from '@angular/common/http';

describe('DispositivosComponent', () => {
  let component: DispositivosComponent;
  let fixture: ComponentFixture<DispositivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ DispositivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
