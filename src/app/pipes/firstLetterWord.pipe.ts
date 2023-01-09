import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firstLetterWord' })
export class FirstLetterWordPipe implements PipeTransform {

  transform(value: string): string {
    value = String(value || '').trim();
    let result = '';
    let space = true;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < value.length; index++) {
      const element = value[index];

      if (element == ' ') {
        space = true;
      }

      if (element.trim() && space == true) {
        result += element.charAt(0);
        space = false;
      }
    }

    return result;
  }

}