import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Pipe responsible to retun the current age.
 */
@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {

    transform(date: Date): string {
        const today = moment();
        const birthdate = moment(date);

        const years = today.diff(birthdate, 'years');

        const age = `${years} anos`;

        return age;
    }

}
