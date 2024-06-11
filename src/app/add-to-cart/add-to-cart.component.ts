import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  @Input() myCompanyName:string;// the data for this property will be received from the parent
  @Input() selProduct:Products | null;
  @Input() qtySelected:number;
  @Output() cancelProduct:EventEmitter<void>
  @Output() confirmProduct:EventEmitter<any>;
  
  colors:string[]=["red","green"];
  myColors:string[];

  constructor()
  {
    this.myColors=["red","green"];
    this.myCompanyName="";
    this.selProduct=null;
    console.log("Selected product",this.selProduct);//expected output : HP Laptop; actual output:null
    this.qtySelected=1;
    this.cancelProduct=new EventEmitter<void>();
    this.confirmProduct=new EventEmitter<any>();

  }
  valueDecrease(){
    if(this.qtySelected>0)
    this.qtySelected--;
  // var cartObj:any = {...this.selProduct,qtySelected:this.qtySelected};
  //   this.confirmProduct.emit(cartObj);
  }
  valueIncrease(){
    this.qtySelected++;}

    cancelEventHandler(){
      this.cancelProduct.emit();

    }

    confirmEventHandler() {
      var cartObj: any = { ...this.selProduct, quantitySelected: this.qtySelected }
      console.log("cartObj", cartObj);
      this.confirmProduct.emit(cartObj);
    }

}
