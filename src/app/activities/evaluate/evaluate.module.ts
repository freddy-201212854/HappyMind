import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluatePageRoutingModule } from './evaluate-routing.module';

import { EvaluatePage } from './evaluate.page';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { HeaderComponentModule } from 'src/app/components/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluatePageRoutingModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule,
    HeaderComponentModule
  ],
  declarations: [EvaluatePage]
})
export class EvaluatePageModule {}
