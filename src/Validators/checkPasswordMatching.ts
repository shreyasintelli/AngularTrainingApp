import { FormGroup } from "@angular/forms";

export function checkPasswordMatching(controlName1:string, controlName2:string)
{
    return function(formGroup:FormGroup){
        var control1=formGroup.controls[controlName1];
        var control2=formGroup.controls[controlName2];
        if(!control1 || !control2)
            {
                //control2.setErrors(null);
                 return null;
            }
        //control1  should have no errors
        // control2 has no other error


        if(control1.value == control2.value)
            {
                control2.setErrors(null);
                return null;
            }
        else
        {
            control2.setErrors({passwordsNotMatching:true});
            return ({passwordsNotMatching:true});
        }
    }
}