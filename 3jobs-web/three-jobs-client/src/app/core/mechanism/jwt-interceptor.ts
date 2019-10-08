import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Observable, of } from 'rxjs';
import {  tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private spinnerService: Ng4LoadingSpinnerService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        this.spinnerService.show();

        if (token && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }

        return next.handle(request).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    this.spinnerService.hide();
                }
            }),
            catchError((error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 403) {
                        this.authService.logout();
                        this.spinnerService.hide();
                        this.router.navigateByUrl('/');
                    }
                }

                return of(error);
            })
        );
    }
}
