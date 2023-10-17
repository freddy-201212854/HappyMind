import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionPageRoutingModule } from './promotion-routing.module';

import { PromotionPage } from './promotion.page';
import { HeaderComponentModule } from '../components/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [PromotionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PromotionPageModule {}
