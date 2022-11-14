import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailMask',
})
export class emailPipe implements PipeTransform {
  transform(value: string): string {
    let codeString = '';
    for (let i = 0; i < value.indexOf('@') - 5; i++) {
      codeString += '*';
    }
    return value.substring(0, 5) + codeString + value.substring(value.indexOf('@'), value.length - 1);
  }
}
//value.slice(5, value.indexOf('@'));
