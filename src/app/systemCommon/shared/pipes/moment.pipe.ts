import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'appMoment'
})

export class MomentPipe implements PipeTransform {
  transform(value: string): string {
    return moment(value, 'DD.MM.YY h:mm:ss').fromNow();
  }
}
