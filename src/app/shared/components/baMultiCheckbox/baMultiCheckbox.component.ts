import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ba-multi-checkbox',
  templateUrl: './baMultiCheckbox.html'
})
export class BaMultiCheckbox implements ControlValueAccessor {

  @Input() baMultiCheckboxClass: string;
  @Input() propertiesMapping: any;

  public constructor() { }

  public getProp(item: any, propName: string): string {
    const prop = this.propertiesMapping[propName];

    if (!prop) {
      return item[propName];
    } else if (typeof prop === 'function') {
      return prop(item);
    }
    return item[prop];
  }

  public onChange(value: any): void { }
  public onTouch(value: any): void { }
  public writeValue(state: any): void {
    /*this.state = state;*/
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void { this.onTouch = fn; }
}
