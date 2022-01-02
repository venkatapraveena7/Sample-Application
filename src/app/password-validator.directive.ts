// equal-validator.directive.ts

import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[passwordValidate]',

})
export class PasswordValidator implements Validator {
    constructor(@Attribute('passwordValidate') public passwordValidate: string) {

    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        let v = c.value;

        // control value (e.g. password)
        let e = c.root.get(this.passwordValidate);
        let upperCaseCharacters = /[A-Z]+/g;
        let lowerCaseCharacters = /[a-z]+/g;
        let numberCharacters = /[0-9]+/g;
        let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (upperCaseCharacters.test(v) === false || lowerCaseCharacters.test(v) === false || numberCharacters.test(v) === false || specialCharacters.test(v) === false) {
            return {
                passwordValidate: 'Password must contain at least two of the following: numbers, lowercase letters, uppercase letters, or special characters.'
            }

        } else {
            return {
                passwordValidate: 'Suceess'
            };
        }

    }

}