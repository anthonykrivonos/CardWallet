import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'parse' })
export class ParsePipe implements PipeTransform {
      transform(value:any, args:any):Array<any> {
            return Array.isArray(value) ? Array.from(value) : [value];
      }
}
