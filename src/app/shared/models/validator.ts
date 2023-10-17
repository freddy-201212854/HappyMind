import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import parsePhoneNumber from 'libphonenumber-js'

/**
 * Validate email address entered by the user
 * @param control field to control
 * @returns
 */
export function emailValidator(control: FormControl): ValidationErrors {
  const filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (!control.value || filter.test(control.value)) ? null : { emailValidator: "emailValidator" };
}

/**
 * Validate name entered by the user
 * @param control field to control
 * @returns
 */
export function nameValidator(control: FormControl): ValidationErrors {
  var filter = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/;
  return (!control.value || filter.test(control.value)) ? null : { nameValidator: "nameValidator" };
}

/**
 * Validate password entered by the user
 * @param control field to control
 * @returns
 */
export function passwordValidator(control: FormControl): ValidationErrors {
  if (!control.value || control.value.length < 6) {
    return { passwordMin: "passwordMin" };
  } else {
    let pass = control.value;
    var numbers = pass.match(/\d+/g);
    var uppers = pass.match(/[A-Z]/);
    var lowers = pass.match(/[a-z]/);
    var special = pass.match(/[!@#$%\^&*\+]/);
    if(numbers === null) {
      //return { passwordNumber: "passwordNumber" };
    }
    if(uppers === null) {
      return { passworUpper: "passworUpper" };
    }
    if(lowers === null) {
      //return { passwordLower: "passwordLower" };
    }
    if(special === null) {
      //return { passwordSpecial: "passwordSpecial" };
    }

    return null;
  }

  //return (!control.value || control.value.length >= 6) ? null : { passwordValidator: "passwordValidator" };
}

/**
 * Validate compare passwords entered
 * @param control field to control
 * @returns
 */
export function fieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;
  if (!passwordConfirm || !password) { return null; }
  if (passwordConfirm === password) { return null; }
  return { fieldMatch: "fieldMatch" };
}

export function phoneValidator(control: AbstractControl) {
  const { country, phone } = control.value;
  if (!country || !phone) { return null; }

  if (!phone || phone.length < 5) { return { phoneValidator: "phoneValidator" }; }
  if (!country || country.length < 5) { return { countryValidator: "countryValidator" }; }
  let countryCode = "";
  if(country == "Guatemala" || country == 1) { countryCode = "+502"; }
  if(country == "Colombia" || country == 3) { countryCode = "+57"; }
  if(country == "Honduras" || country == 2) { countryCode = "+504"; }
  if(country == "Nicaragua" || country == 4) { countryCode = "+505"; }
  if(country == "El Salvador" || country == 5) { countryCode = "+503"; }
  let countryPhone = countryCode + phone;
  const validPhone = parsePhoneNumber(countryPhone);
  if (validPhone.isValid()) {
    return null;
  } else {
    return { phoneValidator: "phoneValidator" };
  }
}
