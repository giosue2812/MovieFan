import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAdmin'
})
export class IsAdminPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Admin':'User';
  }

}
