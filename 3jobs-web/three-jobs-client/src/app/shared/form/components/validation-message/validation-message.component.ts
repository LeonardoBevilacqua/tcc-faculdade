import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgControl, AbstractControl, Validators, FormGroup } from '@angular/forms';

/**
 * Component responsible to display input validation messages.
 */
@Component({ selector: 'validation-message', templateUrl: './validation-message.component.html' } )
export class ValidationMessageComponent {
    /**
     * the input control.
     */
    @Input() inputControl: NgControl;
    @Input() msgError: string;

    static  mustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
    }

    static isValidCpf() {
        return (control: AbstractControl): Validators => {
          const cpf = control.value;
          if (cpf) {
            let numbers, digits, sum, i, result, equalDigits;
            equalDigits = 1;
            if (cpf.length < 11) {
             return null;
            }
   
            for (i = 0; i < cpf.length - 1; i++) {
              if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
                equalDigits = 0;
                break;
              }
            }
   
            if (!equalDigits) {
              numbers = cpf.substring(0, 9);
              digits = cpf.substring(9);
              sum = 0;
              for (i = 10; i > 1; i--) {
                sum += numbers.charAt(10 - i) * i;
              }
   
              result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
   
              if (result !== Number(digits.charAt(0))) {
                return { cpfNotValid: true };
              }
              numbers = cpf.substring(0, 10);
              sum = 0;
   
              for (i = 11; i > 1; i--) {
                sum += numbers.charAt(11 - i) * i;
              }
              result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
   
              if (result !== Number(digits.charAt(1))) {
                return { cpfNotValid: true };
              }
              return null;
            } else {
              return { cpfNotValid: true };
            }
         }
       return null;
     };

    }
}
