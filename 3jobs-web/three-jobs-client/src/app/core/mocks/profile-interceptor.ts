import {
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import { Address } from 'src/app/shared/models/address';
import { Profile } from 'src/app/shared/models/profile';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class ProfileInterceptor implements HttpInterceptor {
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        const addresses: Array<Address> = [
            {
                city: 'Campinas',
                district: 'Vila industrial',
                id: 1,
                name: 'Rua Dr. Sales de Oliveira, 1661',
                state: 'São Paulo',
                zipCode: '11111-111',
            }
        ]
        const profiles: Array<Profile> = [
            {
                id: 1,
                addressId: 1,
                address: addresses.find(a => a.id === 1),
                cellphone: '(11) 99999-9999',
                dateOfBirth: new Date('10/01/1997'),
                name: 'Leonardo',
                lastname: 'Bevilacqua',
                martialSatus: 'Solteiro',
                nationality: 'Brasileiro',
                phone: '(11) 3333-3333',
                experiences: [],
                skills: [],
                tags: [],
                user: new User(),
                userId: 1
            }
        ];

        // wrap in delayed observable to simulate serve api call.
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
        
        function handleRoute() {
            switch (true) {
                case url.match(/\/profiles\/\d+$/) && method === 'GET':
                    return getProfileById();
                case url.endsWith('/profiles') && method === 'POST': 
                    return testes();
                default:
                    return next.handle(request);
            }
        }

        function testes() {
            return ok({message: 'Dados alterados com sucesso!'});
        }

        function getProfileById() {
            const profile = profiles.find(x => x.id == idFromUrl());

            if (profile) {
                return ok(profile);                
            }
            else {
                return notFound('Perfil não encontrado!');
            }
        }

        // helpers 
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function notFound(message: string) {
            return throwError(new HttpResponse({ status: 404, headers: new HttpHeaders({ 'Content-Type': 'application/json' }), statusText: message }));
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const profileInterceptor = {
    // use fake backend in place of Http service for backend-less development.
    provide: HTTP_INTERCEPTORS,
    useClass: ProfileInterceptor,
    multi: true
};
