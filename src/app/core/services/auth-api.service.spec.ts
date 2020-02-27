import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth-api.service';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { environment } from 'src/environments/environment';
import { LoginDTO } from 'src/app/shared/interface/login.interface';

describe('Servicio Autenticacion',async () => {
    let injector: TestBed;
    let httpMock: HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        injector = getTestBed();
        httpMock = injector.get(HttpTestingController);
    });

    it('test login', () => {
        const service: AuthService = TestBed.get(AuthService);
        const dummyLogin: LoginDTO = {
            "ok":true,
            "user":{
                "role":{
                    "admin":true,
                    "control":true,
                    "view":true
                },
                "active":true,
                "reset_password":false,
                "_id":"5e263b84be1c3f0037b24a78",
                "username":"admin",
                "email":"felipe.godoy@ceinf.cl",
                "reset_token":"",
                "created":"2020-01-20T23:45:08.419Z",
                "updated":"2020-01-24T18:45:08.221Z"
            },
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWUyNjNiODRiZTFjM2YwMDM3YjI0YTc4IiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTU4MTk2MzEzMiwiZXhwIjoxNTgyMjIyMzMyfQ.UBsASbR8D-wvXx8Buy-qvxi9H4oVEx8ZAQmnDuJzTlo"}
        const usuario = new UsuarioAPI();
        usuario.username = "admin";
        usuario.password = "Pipeaxe96!";

        service.login(usuario).subscribe( res => {
            expect(res).toEqual(dummyLogin);
        });
        
        const req = httpMock.expectOne(`${ environment.apiURL }/auth/login`);
        expect(req.request.method).toBe('POST');
        req.flush(dummyLogin);
    });
    
    it('Test logout', () => {
        const service: AuthService = TestBed.get(AuthService);
        service.logout();
        expect(service.isUserLoggedIn.value).toBeFalsy();        
    });

    it('Test helpers', () => {
        const service: AuthService = TestBed.get(AuthService);
        expect(service.isAdmin()).toBe(false);
        expect(service.canControl()).toBe(false);
        expect(service.canView()).toBe(false);
    });
    
    
    

});