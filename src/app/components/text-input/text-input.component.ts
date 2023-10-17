import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent extends FieldType {
  icon: any = "";
  constructor() {
    super();
  }

  ngOnInit(): void {
    let aux: any = this.to;
    this.icon = aux.icon;
    console.log(this.icon)
  }
}
