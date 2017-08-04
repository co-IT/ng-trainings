import { Pipe, PipeTransform } from '@angular/core';

/**
 * ' 1234567899 ' -> 1234 5678 99
 */
@Pipe({ name: 'isbn' }) // <p>{{ data.isbn | isbn }}</p>
export class IsbnPipe implements PipeTransform {
  transform(isbn: string): string {
    const trimmed = isbn.trim(); // replace(/\s+/g, '');
    const groups = [];

    for (let i = 0; i < trimmed.length; i += 4) {
      groups.push(trimmed.substr(i, 4));
    }

    return groups.join(' ');
  }
}
