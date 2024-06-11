import { AbstractControl } from "@angular/forms";

export function passwordStrengthValidator()
{
    return function(control:AbstractControl){
        var value=control.value;
        if(!value)
            {
                return null;
            }
        
        const upperCaseCheck=/[A-Z]+/.test(value);
        const lowerCaseCheck=/[a-z]+/.test(value);
        const numberCheck=/[0-9]+/.test(value);
        const specialCharCheck=/[^A-Z,a-z,0-9]+/.test(value);
        const passwordValid=upperCaseCheck && lowerCaseCheck && numberCheck&& specialCharCheck;
        return passwordValid ?null:{passwordStrength: {
            upperCase:upperCaseCheck,
            lowerCase:lowerCaseCheck,
            number:numberCheck,
            specialChar:specialCharCheck
        }};
    }
}