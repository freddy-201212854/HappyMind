import { TranslateService } from "@ngx-translate/core";

/**
 * Messages for dynamic forms
 */
export function formlyValidationConfig(translate: TranslateService) {
  return {
    validationMessages: [
      {
        name: 'required',
        message() { return translate.stream('required_field'); },
      },
      {
        name: 'nameValidator',
        message() { return translate.stream('name_validator_field'); },
      },
      {
        name: 'lastnameValidator',
        message() { return translate.stream('lastname_validator_field'); },
      },
      {
        name: 'emailValidator',
        message() { return translate.stream('email_validator_field'); },
      },
      {
        name: 'passwordValidator',
        message() { return translate.stream('password_validator_field'); },
      },
      {
        name: 'passwordMin',
        message() { return translate.stream('password_min_field'); },
      },
      {
        name: 'passwordNumber',
        message() { return translate.stream('password_number_field'); },
      },
      {
        name: 'passworUpper',
        message() { return translate.stream('password_upper_field'); },
      },
      {
        name: 'passwordLower',
        message() { return translate.stream('password_lower_field'); },
      },
      {
        name: 'passwordSpecial',
        message() { return translate.stream('password_special_field'); },
      },
      {
        name: 'minlength',
        message() { return translate.stream('min_length_validator_field'); },
      },
      {
        name: 'fieldMatch',
        message() { return translate.stream('fieldMatch_validator_field'); },
      },
      {
        name: 'phoneValidator',
        message() { return translate.stream('phone_validator_field'); },
      },
      {
        name: 'countryValidator',
        message() { return translate.stream('country_validator_field'); },
      }
    ],
  };
}
