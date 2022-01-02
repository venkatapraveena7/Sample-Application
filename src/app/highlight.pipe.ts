import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(list: any, searchText: string): any[] {
    if (!list) { return []; }
    if (!searchText) { return list; }

    const re = new RegExp(searchText, 'gi');
    const value = list.toString().replace(re, "<span Style='color:yellow;'>" + searchText + "</span>");
    return list;
  }
}
