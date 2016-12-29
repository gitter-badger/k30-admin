import { layoutPaths } from './../../constants';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'baProfilePicture' })
export class BaProfilePicturePipe implements PipeTransform {

  transform(input: string, ext = 'png'): string {
    return layoutPaths.images.profile + input + '.' + ext;
  }
}
