import { Pipe, PipeTransform, Type } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Pipe({
  name: 'assert',
})
export class AssertPipe implements PipeTransform {
  transform(value: any, type: string): any {
    switch (type) {
      case 'formArray':
        return value as FormArray;
      case 'formGroup':
        return value as FormGroup;
      default:
        return value as FormArray;
    }
  }
}
