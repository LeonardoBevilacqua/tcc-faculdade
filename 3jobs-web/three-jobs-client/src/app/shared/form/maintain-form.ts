import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EntityService } from 'src/app/core/services/entity.service';
import { Entity } from 'src/app/shared/models/entity';
import { environment } from 'src/environments/environment';

/**
 * Generic class, responsible to deal with forms management.
 */
export class MaintainForm<E extends Entity> {

    /**
     * Holds the current model data.
     */
    model: E;

    /**
     * Flag that indicate when the form is submitted.
     */
    isSubmitted: boolean;

    /**
     * Flag that indicate if the form is edition form.
     */
    isEdition: boolean;

    /**
     * The current id of the entity.
     */
    currentId: number;

    /**
     * The Default constructor.
     *
     * @param entityService The current service that will be used.
     * @param router The router service.
     * @param toastr The toastr service for notifications.
     */
    constructor(
        private entityService: EntityService<E>,
        protected router: Router,
        protected toastr: ToastrService) {
        // initialize the variables
        this.isSubmitted = false;
        this.isEdition = false;

    }

    /**
     * Method responsible to submit the form.
     */
    onSubmit(redirectPath: string = null) {
        this.isSubmitted = false;


        // If current id was set, then make a PUT request
        if (this.isEdition) {
            // If current id matches the model id
            if (this.currentId === this.model.id) {
                this.entityService.update(this.model).subscribe(
                    (response: any) => {
                        this.toastr.success(response.message ? response.message : 'Informações atualizadas com sucesso!');

                        this.isSubmitted = true;

                        if (redirectPath) {
                            this.router.navigateByUrl(redirectPath);
                        }
                    },
                    (error: HttpErrorResponse) => this.errorHandler(error)
                );
            }
        }
        // Otherwise, make a POST request
        else {
            this.entityService.create(this.model).subscribe(
                (response: any) => {
                    this.toastr.success(response.message ? response.message : 'Informações salvas com sucesso!');

                    this.isSubmitted = true;

                    if (redirectPath) {
                        this.router.navigateByUrl(redirectPath);
                    }
                },
                (error: HttpErrorResponse) => this.errorHandler(error)
            );
        }
    }

    /**
     * Method responsible to load the model using the current id if is set.
     */
    loadModelFromCurrentId() {
        // get the current path id if exists
        this.getCurrentId();

        // set the edition flag to true
        this.isEdition = true;


        // load the model
        this.entityService.read(this.currentId).subscribe(
            response => {
                this.toastr.info('Dados carregados');
                this.model = response;
            },
            (error: HttpErrorResponse) => {
                this.errorHandler(error);
                this.router.navigateByUrl('/');
            }
        );
    }

    /**
     * get the current path id if exists
     */
    getCurrentId() {
        this.currentId = +this.router.url.split('/')[2];
    }

    /**
     * Method responsible to handle the request error.
     *
     * @param error Response error object
     */
    public errorHandler(error: HttpErrorResponse) {
        this.isSubmitted = false;
        // if error is set, Show the server message.
        if (error.error && error.status !== 0) {
            // set a title to show
            const title = error.error.title ? error.error.title : `Erro ${error.status}`;
            // display the warning message
            this.toastr.warning(error.error.message, title);
        }
        // else, show a error message
        else {
            this.toastr.error('Tente novamente mais tarde.', 'Falha ao se comunicar com servidor!');
        }



        if (!environment.production) {
            // for debug
            console.error(error);
        }
    }
}
