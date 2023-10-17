import { Injectable } from '@angular/core';
import { Constants } from '../shared/models/constants';
import { LanguageService } from './language.service';
import { GeneralFiles } from './models/files';

@Injectable({
  providedIn: 'root'
})
export class LocalfileService {

  /**
   * Constructor.
   */
  constructor(private lng: LanguageService) { }

  /**
   * Get local file.
   * @param fileName name of the file to be consumed.
   */
  getLocalFile(fileName: string, path: Constants = Constants.localFiles): Promise<any> {
    return new Promise((resolve, reject) => {
      let currentFileByLang = this.getFileByLanguage(fileName)
      fetch(path + currentFileByLang).then(res => res.json())
        .then(json => {
          resolve(json);
        }, error => {
          reject(error);
        });
    });
  }

  /**
   * Get local file.
   * @param fileName name of the file to be consumed.
   */
  getLocalFileLocalizated(fileName: string, path: Constants = Constants.localFiles, translate: boolean = true): Promise<any> {
    return new Promise((resolve, reject) => {
      let currentFileByLang = this.getFileByLanguage(fileName)
      fetch(path + currentFileByLang).then(res => res.json())
        .then(json => {
          var json_localizated: any = json;
          json_localizated = json_localizated.map((value) => {
            if (translate) {
              if (value.fieldArray !== undefined && value.fieldArray !== null) {
                if (value.fieldArray.fieldGroup !== undefined && value.fieldArray.fieldGroup !== null) {
                  value.fieldArray.fieldGroup = value.fieldArray.fieldGroup.map((group) => {
                    group.expressionProperties = { "templateOptions.label": this.lng.translate.stream(group.templateOptions.label) }
                    return group;
                  });
                }
              } else {
                if (value.fieldGroup === undefined || value.fieldGroup === null) {
                  value.expressionProperties = { "templateOptions.label": this.lng.translate.stream(value.templateOptions.label) }
                } else {
                  value.fieldGroup = value.fieldGroup.map((group) => {
                    group.expressionProperties = { "templateOptions.label": this.lng.translate.stream(group.templateOptions.label) }
                    return group;
                  });
                }
              }
            }
            return value;
          });
          resolve(json_localizated);
        }, error => {
          reject(error);
        });
    });
  }

  getInputLocalizated(input: any, translate: boolean = true): Promise<any> {
    return new Promise((resolve, reject) => {
      var json_localizated: any = input;
      json_localizated = json_localizated.map((value) => {
        if (translate) {
          if (value.fieldArray !== undefined && value.fieldArray !== null) {
            if (value.fieldArray.fieldGroup !== undefined && value.fieldArray.fieldGroup !== null) {
              value.fieldArray.fieldGroup = value.fieldArray.fieldGroup.map((group) => {
                if (group.fieldGroup === undefined || group.fieldGroup === null) {
                  console.log(group.type)
                  if(group.type !== "formly-template") {
                    group.expressionProperties = { "templateOptions.label": this.lng.translate.stream(group.templateOptions.label) }
                  }
                } else {
                  group.fieldGroup = group.fieldGroup.map((item) => {
                    console.log(item.type)
                    item.expressionProperties = { "templateOptions.label": this.lng.translate.stream(item.templateOptions.label) }
                    return item;
                  });
                }
                return group;
              });
            }
          } else {
            if (value.fieldGroup === undefined || value.fieldGroup === null) {
              value.expressionProperties = { "templateOptions.label": this.lng.translate.stream(value.templateOptions.label) }
            } else {
              value.fieldGroup = value.fieldGroup.map((group) => {
                group.expressionProperties = { "templateOptions.label": this.lng.translate.stream(group.templateOptions.label) }
                return group;
              });
            }
          }
        }
        return value;
      });
      resolve(json_localizated);
    });
  }



  /**
   * Get local file.
   * @param fileName name of the file to be consumed.
   */
  getFileByLanguage(file) {
    return file.replace("{{ lng }}", this.lng.getCurrentLanguage());
  }
}
