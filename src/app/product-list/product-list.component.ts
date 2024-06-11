import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../products';

import { ActivatedRoute, Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-product-list', // Update this selector
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  @Output() sendCartObjFromPlToHome:EventEmitter<any>;

  @Input() productsArr:Array<Products>;

  showAddToCart:boolean;
  isDisabled:boolean;
  temp:number;
  companyName:string;
  selectedProduct:Products | null;
  //productsArr1:Products[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute)
  {
    this.selectedProduct=null;
    this.companyName="Intelliswift";
    this.isDisabled=true;
    this.temp=10;
    this.productsArr=[];
    this.sendCartObjFromPlToHome=new EventEmitter<any>();
 
   
    this.showAddToCart=false;
  
    
    
  }
  addToCart(product:Products){
    this.showAddToCart=true;

  this.selectedProduct=product;
  }
  cancelProductEventHandler()
  {
    // unmount the child AddToCart component
    this.showAddToCart=false;
  }
  confirmProductEventHandler(cartObj:any)
  {
    // unmount the child AddToCart component
    this.showAddToCart=false;
    // reduce the quantity
    //var pos=this.productsArr.findIndex(product => product.productId == cartObj.productId);// object | ud
    var selectedProduct=this.productsArr.find(product => product.productId == cartObj.productId);// object | ud
    // selectedProduct is a reference to the element in productsArr
    if(selectedProduct)
      {
        selectedProduct.quantity=selectedProduct.quantity-cartObj.quantitySelected;
      }
      this.sendCartObjFromPlToHome.emit(cartObj);
  }
  detailsEventHandler(selectedProduct: Products) {
    this.router.navigate(['product-details', selectedProduct.productId]);
  }
  


 

}
