// https://netbasal.com/how-to-implement-file-uploading-in-angular-reactive-forms-89a3fffa1a03


import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FileUploadComponent,
    multi: true
  }]
})
export class FileUploadComponent implements ControlValueAccessor {

  @Input() progress;
  onChange: Function;

  private file: File | null = null;

  // Angular dosen't come with a built-in value accessor for file input
  // custom value accessor
  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    // No value accessor for form control with name 'image'
    this.onChange(file);
    this.file = file;
  }

  constructor(
    private host: ElementRef<HTMLInputElement>
  ) { }

  writeValue(obj: any): void {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
