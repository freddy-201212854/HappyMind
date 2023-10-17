import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './search.component';


@NgModule({
    declarations: [SearchComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [SearchComponent]
})
export class SearchComponentModule {}
