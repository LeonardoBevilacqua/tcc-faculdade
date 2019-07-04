import { Entity } from "src/app/shared/models/entity";

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

    constructor() {
        // initialize the variables
        this.isSubmitted = false;
    }

    onSubmit() {
        this.isSubmitted = true;
        console.log('hey, submit');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
