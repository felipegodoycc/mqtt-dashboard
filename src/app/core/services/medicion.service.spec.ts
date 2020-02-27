import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth-api.service';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { environment } from 'src/environments/environment';
import { LoginDTO } from 'src/app/shared/interface/login.interface';

describe('Servicio Medicion',async () => {
    let injector: TestBed;
    let httpMock: HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        injector = getTestBed();
        httpMock = injector.get(HttpTestingController);
    }); 
});