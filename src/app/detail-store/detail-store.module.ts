import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailStorePageRoutingModule } from './detail-store-routing.module';

import { DetailStorePage } from './detail-store.page';
import { HeaderComponentModule } from '../components/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailStorePageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [DetailStorePage]
})
export class DetailStorePageModule {}
