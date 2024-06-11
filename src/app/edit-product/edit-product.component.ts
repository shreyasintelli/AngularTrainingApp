import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
@Input() productToBeEdited:any;
@Output() productToBeEditedChange:EventEmitter<Products>;

constructor()
{
  this.productToBeEdited=null;
  this.productToBeEditedChange=new EventEmitter<Products>();
}
}
