import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';

describe('Servicio Usuarios', async () => {
    let injector: TestBed;
    let httpMock: HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        injector = getTestBed();
        httpMock = injector.get(HttpTestingController);
    });

    const dummyUsers = [
        {
            username: 'felipe',
            role: {
                admin: true,
                view: false,
                control: true
            }
        },
        {
            username: 'felip2',
            role: {
                admin: true,
                view: false,
                control: true
            }
        }
    ];
    const dummyUser= {
        ok: true,
        user: {
            username: 'felipe',
            role: {
                admin: true,
                view: false,
                control: true
            }
        }
    };
    const userTest: UsuarioAPI = {
        username: 'testing',
        email: 'pipexth@gmail.com',
        role: { admin: false, view: true, control: false}
    }

    it('test create', () => {
        const service: UserService = TestBed.get(UserService);
        
        service.newUser(userTest).subscribe( res => {
            expect(res).toEqual(dummyUser);
        })
        const req = httpMock.expectOne(`${ environment.apiURL }/users`);
        expect(req.request.method).toBe('POST');
        req.flush(dummyUser);
    });

    it('test get users', () => {
        const service: UserService = TestBed.get(UserService);

        service.getUsers(-1,-1).subscribe( res => {
            expect(res).toEqual(dummyUsers);
        })
        const req = httpMock.expectOne(`${ environment.apiURL }/users/?page=-1&limit=-1`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyUsers);
    })

    it('test delete user', () => {
        const service: UserService = TestBed.get(UserService);
        const userID = "123456"
        service.deleteUser(userID).subscribe( res => {
            expect(res).toEqual(dummyUser)
        })

        const req = httpMock.expectOne(`${ environment.apiURL }/users/${userID}`)
        expect(req.request.method).toBe('DELETE');
        req.flush(dummyUser);
    });

    it('test activate user', () => {
        const service: UserService = TestBed.get(UserService);
        const userID = "123456"
        service.activateUser(userID).subscribe( res => {
            expect(res).toEqual(dummyUser)
        })

        const req = httpMock.expectOne(`${ environment.apiURL }/users/${userID}/activate`)
        expect(req.request.method).toBe('PUT');
        req.flush(dummyUser);
    });

    it('test edit user', () => {
        const service: UserService = TestBed.get(UserService);
        const userID = "123456"
        service.editUser({ _id: userID, ...userTest}).subscribe( res => {
            expect(res).toEqual(dummyUser)
        })

        const req = httpMock.expectOne(`${ environment.apiURL }/users/${userID}`)
        expect(req.request.method).toBe('PUT');
        req.flush(dummyUser);
    });
    
    
    

});