import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './storage.service';
import { Keys } from '../shared/models/constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = "";
  language: string;
  /**
   * Constructor.
   */
  constructor(public translate: TranslateService, private storage: StorageService) { }

  /**
   * initialize application with the language detected by the device or chosen by the user
   */
  setInitialAppLanguage() {
    var language = "es";

    var storageLng = this.storage.getItem(Keys.languague);
    if (storageLng === 'null' || storageLng === undefined || storageLng === null) {
      if (this.permittedLanguages()) {
        language = this.translate.getBrowserLang();
      }
    } else {
      language = storageLng;
    }

    this.language = language;
    this.setDefaultLang(this.language);
  }

  /**
   * Obtain the default languages that will be available in the app
   */
  getLanguages() {
    return [
      { text: "English", value: "en" },
      { text: "Español", value: "es" }
    ];
  }

  /**
   * Language change according to user's selection.
   * @param lng abbreviation of the chosen language.
   */
  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.setItem(Keys.languague, lng);
  }

  /**
   * Get current language.
   */
  getCurrentLanguage() {
    return this.storage.getItem(Keys.languague);
  }

  /**
   * Get the translated value of a key
   * @param key key or attribute to obtain the translation
   */
  async getValue(key): Promise<string> {
    const value = await this.getValueTranslate(key);
    return value as string;
  }

  /**
   * Get the translated value of a key
   * @param key key or attribute to obtain the translation
   */
  private getValueTranslate(key) {
    return new Promise((resolve, reject) => {
      this.translate.get(key).toPromise().then(translated => {
        resolve(translated);
      }).catch(error => {
        reject(error);
      })
    });
  }

  /**
   * Language change according to user's selection.
   * @param lng abbreviation of the chosen language.
   */
  setDefaultLang(language: string) {
    this.translate.setDefaultLang(language);
  }

  /**
   * Set manual Language.
   * @param lng abbreviation of the chosen language.
   */
  setManualLng(language: string){
    this.storage.setItem(Keys.languague, language);
  }

  /**
   * get the language allowed for the use of the app
   */
  private permittedLanguages() {
    const language = this.translate.getBrowserLang();
    var lngs = this.getLanguages().filter(function (lng) {
      return lng.value.includes(language);
    });
    if (lngs.length > 0) {
      return true;
    }
    return false;
  }

}
