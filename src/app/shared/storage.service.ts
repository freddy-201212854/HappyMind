import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  /**
   * Constructor.
   */
  constructor() { }

  /**
   * Get the value of localstorage
   * @param name name of the attribute for which the value and/or information is to be obtained.
   */
  getItem(name: string, parsejson: any = false) {
    return (parsejson) ? JSON.parse(localStorage.getItem(name)) : localStorage.getItem(name);
  }

  /**
   * Store the value of localstorage
   * @param name name of the attribute for which the value and/or information is to be stored.
   * @param value value of the attribute for which the value and/or information is to be stored.
   */
  setItem(name: string, value: string) {
    localStorage.setItem(name, value);
  }
}
