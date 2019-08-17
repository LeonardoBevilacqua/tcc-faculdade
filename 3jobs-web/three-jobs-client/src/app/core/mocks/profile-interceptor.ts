import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, dematerialize, materialize } from 'rxjs/operators';
import { ok } from 'assert';

@Injectable()
export class ProfileInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate serve api call.
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
        
        function handleRoute() {
            switch (true) {
                case url.endsWith('/profiles') && method === 'POST': 
                    return testes();
                default:
                    return next.handle(request);
            }
        }

        function testes() {
            return ok({message: 'Dados alterados com sucesso!'});
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }
    }
}

export const profileInterceptor = {
    // use fake backend in place of Http service for backend-less development.
    provide: HTTP_INTERCEPTORS,
    useClass: ProfileInterceptor,
    multi: true
};
