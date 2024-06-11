import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './products';

@Pipe({
  name: 'displayArray'
})
export class DisplayArrayPipe implements PipeTransform {

  transform(value: Products[], ...args: string[]): Products[] {
    if (args[0] && args[0] == "") {
      return value;
    }
    if (args[0] && args[0] != "") {
      var searchTerm = args[0];
      // filter the data according to the search term
      // iterate through the various fields and check for the serach term presence
      //
      return value.filter(item => {
        if ((item.productName.includes(searchTerm)) || (item.description.includes(searchTerm))) {
          return true;

        }
        else {
          return false;
        }
      })



    }



    return value;
  }

}
