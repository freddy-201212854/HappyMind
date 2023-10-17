import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { HeaderComponentModule } from 'src/app/components/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule,
    HeaderComponentModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
