import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSheetComponent } from './users-sheet.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UsersSheetComponent', () => {
  let component: UsersSheetComponent;
  let fixture: ComponentFixture<UsersSheetComponent>;
  let usuario: UsuarioAPI = new UsuarioAPI();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, AngularMaterialModule, FormsModule, BrowserAnimationsModule],
      declarations: [ UsersSheetComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {}},
        { provide: MatDialogRef, useValue: {}}
      ]
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
