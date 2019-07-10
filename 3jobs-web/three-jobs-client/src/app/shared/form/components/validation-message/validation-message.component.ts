import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * Component responsible to display input validation messages.
 */
@Component({ selector: 'validation-message', templateUrl: './validation-message.component.html' } )
export class ValidationMessageComponent {
    /**
     * the input control.
     */
    @Input() inputControl: NgControl;
}
