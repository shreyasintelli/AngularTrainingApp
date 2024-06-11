import { AbstractControl } from "@angular/forms";

export function checkStartDateBegin(dbStartDate:Date) {
    return function (control: AbstractControl) {
           
        if (!control.value) {
            return null;
        }
        
        var value = control.value;// string format of the selected date
        console.log(value);
        var valueInDateObj = new Date(value);
        /* var year = valueInDateObj.getFullYear();

        // if (year > dbStartDate.getFullYear()) {
        //     return null;
        // }
        // else {
        //     return { startDateBegin: true }
        // }
        */
        // value in text box should be greater than the dbStartDate
        if (valueInDateObj > dbStartDate) {
                return null;
            }
            else {
                return { startDateBegin: true }
            }


    }
}