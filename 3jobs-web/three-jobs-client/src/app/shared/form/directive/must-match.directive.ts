import { Attribute, Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})

export class MustMatchDirective implements Validator {
    constructor(@Attribute('mustMatch') public mustMatch: string, @Attribute('reverse') public reverse: string) { }

    private get isReverse() {
        if (!this.reverse) {
            return false;
        }

        return this.reverse === 'true' ? true : false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        const v = c.value;

        // control vlaue
        const e = c.root.get(this.mustMatch);

        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return { mustMatch: true };
        }

        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors.mustMatch;
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }

        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ mustMatch: true });
        }

        return null;
    }
}
