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
import { Profile } from 'src/app/shared/models/profile';

@Injectable()
export class ProfileInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        let profiles: null;

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
                case url.match(/\/profiles\/\d+$/) && method === 'PUT':
                    return updateProfile();
                default:
                    return next.handle(request);
            }
        }

        function updateProfile() {
            console.log('body', body);
            //const profile = body;
            //profiles.findIndex(p => p.id === profile.id);
            
            return ok({ message: 'Dados alterados com sucesso!' });
        }

        function getProfileById() {
            const profile = null; //profiles.find(x => x.id == idFromUrl());

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
