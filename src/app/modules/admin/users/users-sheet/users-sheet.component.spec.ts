import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSheetComponent } from './users-sheet.component';

describe('UsersSheetComponent', () => {
  let component: UsersSheetComponent;
  let fixture: ComponentFixture<UsersSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
