import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityService } from 'src/app/core/services/entity.service';
import { Entity } from 'src/app/shared/models/entity';

/**
 * Generic class, responsible to deal with forms management.
 */
export class MaintainForm<E extends Entity> implements OnInit {

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
     */
    constructor(private entityService: EntityService<E>, private router: Router) {
        // initialize the variables
        this.isSubmitted = false;
        this.isEdition = false;

    }

    ngOnInit() {
        // TODO: Change this to a better way
        this.currentId = +this.router.url.split('/')[2];

        // if current id is set, load model data.
        if (this.currentId) {
            this.loadModel();
        }
    }

    /**
     * Method responsible to submit the form.
     */
    onSubmit() {
        this.isSubmitted = true;
        // If current id was set, then make a PUT request
        if (this.currentId) {
            // If current id matches the model id
            if (this.currentId === this.model.id) {
                this.entityService.update(this.model).subscribe(
                    response => {
                        console.log(response);
                    },
                    (error: HttpErrorResponse) => this.errorHandler(error)
                )
            }
        }
        // Otherwise, make a POST request
        else {
            this.entityService.create(this.model).subscribe(
                response => {
                    console.log(response);
                },
                (error: HttpErrorResponse) => this.errorHandler(error)
            );
        }


    }

    /**
     * Method responsible to load the model using the current id.
     */
    loadModel() {
        // set the edition flag to true
        this.isEdition = true;

        // load the model
        this.entityService.read(this.currentId).subscribe(
            response => {
                console.log(response);
                this.model = response;
            },
            (error: HttpErrorResponse) => this.errorHandler(error)
        );
    }

    /**
     * Method responsible to handle the request error. TODO
     * 
     * @param error Response error object
     */
    private errorHandler(error: HttpErrorResponse) {
        console.log(error.error, error);
    }
}
