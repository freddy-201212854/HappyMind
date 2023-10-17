import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [HeaderComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [HeaderComponent]
})
export class HeaderComponentModule {}
