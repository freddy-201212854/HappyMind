import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent extends FieldType {
  showPassword: any = false;
  inputType: any = "password";

  password() {
    this.showPassword = !this.showPassword;
    if(this.showPassword) {
      this.inputType = "input";
    } else {
      this.inputType = "password";
    }
  }
}
