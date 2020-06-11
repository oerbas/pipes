import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertRem'
})
export class ConvertRemPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if (!value) {
      return '';
    }

    switch (targetUnits) {
      case 'px':
        return value * 16 + 'px'
      case 'rem':
        return value * 0.0625 + 'rem'
      default:
        value;
    }
  }

}
