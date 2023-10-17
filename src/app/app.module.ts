import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { FormlyModule } from '@ngx-formly/core';
import { emailValidator, fieldMatchValidator, nameValidator, passwordValidator, phoneValidator } from './shared/models/validator';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { HeaderComponentModule } from './components/header/header.component.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, PasswordInputComponent, TextInputComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    FormlyIonicModule,
    FormlyModule.forRoot(
      {
        validators: [
          { name: "nameValidator", validation: nameValidator },
          { name: "lastnameValidator", validation: nameValidator },
          { name: "emailValidator", validation: emailValidator },
          { name: "passwordValidator", validation: passwordValidator },
          { name: "fieldMatch", validation: fieldMatchValidator },
          { name: "phoneValidator", validation: phoneValidator }
        ],
        types: [
          { name: 'password', component: PasswordInputComponent },
          { name: 'textInput', component: TextInputComponent }
        ]
      }
    ),
    HeaderComponentModule
  ],
  providers: [
    Globalization,
    Geolocation,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
