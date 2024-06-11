import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-editprodd',
  templateUrl: './editprodd.component.html',
  styleUrls: ['./editprodd.component.css']
})
export class EditproddComponent {
  @Input()productToEdit:any;
  @Output()productToEditChange:EventEmitter<any>;
  @Output() closeProduct:EventEmitter<void>

  constructor(){
    this.productToEdit= null;
    this.productToEditChange = new EventEmitter<Products>
  this.closeProduct =new EventEmitter<void>
  }
closeProductEventHandler(){
  this.closeProduct.emit();
}


}
