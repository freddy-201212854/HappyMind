import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactWithDoctorPageRoutingModule } from './contact-with-doctor-routing.module';

import { ContactWithDoctorPage } from './contact-with-doctor.page';
import { HeaderComponentModule } from 'src/app/components/header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactWithDoctorPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [ContactWithDoctorPage]
})
export class ContactWithDoctorPageModule {}
