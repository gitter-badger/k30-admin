import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ba-checkbox',
  styleUrls: ['./baCheckbox.scss'],
  templateUrl: './baCheckbox.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaCheckbox),
      multi: true
    }
  ]
})
export class BaCheckbox implements ControlValueAccessor {

  @Input() disabled: boolean;
  @Input() label: string;
  @Input() value: string;
  @Input() baCheckboxClass: string;

  public constructor() { }

  public onChange(value: any): void { }
  public onTouch(value: any): void { }
  public writeValue(value: any): void { }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public onValueChange() {

  }

  public registerOnTouched(fn: any): void { this.onTouch = fn; }
}
