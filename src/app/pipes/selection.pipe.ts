import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'selection',
})
export class SelectionPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string, select: string): any {
    if (!select) return value;

    const re = new RegExp(select, 'gi');
    const matchVal = value.match(re); //A,A,a
    let newString = '';

    const arr = value.split(re); //A "nton" A "br" a "mov"
    // "K" a "rl"
    if (!arr || !matchVal) return value;
    console.log(value);
    console.log(matchVal);
    if (arr.length === matchVal?.length) {
      arr.forEach((item, index) => {
        newString += `<span class="bg-warning">${matchVal.shift()}</span>` + item;
      });
    } else {
      newString += arr.shift();
      matchVal.forEach((item, index) => {
        newString += `<span class="bg-warning">${item}</span>` + arr.shift();
      });
    }
    console.log(newString);
    return newString;
  }
}
