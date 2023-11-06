import { ITodoItem } from '../interface/todo-item.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: ITodoItem[], searchText: string): ITodoItem[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((items) => {
      return items.description.toLocaleLowerCase().includes(searchText);
    });
  }
}
