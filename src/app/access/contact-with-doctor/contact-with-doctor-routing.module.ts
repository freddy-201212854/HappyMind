import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactWithDoctorPage } from './contact-with-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: ContactWithDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactWithDoctorPageRoutingModule {}
