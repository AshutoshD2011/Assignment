import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  
  transform(value: any[], args: string): any[] {
    const keyword = args.toLowerCase();
    return value.filter(item => item.name.toLowerCase().includes(keyword));
  }

}
