import { Component } from '@angular/core';
import { Products } from '../products';
import { WorkWithProductsService } from '../work-with-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCart:boolean;
  //cartObj:any;
  cartArr:any[];
  productsArr:Array<Products>;
  constructor(private workWithProduct :WorkWithProductsService)
  {
    this.productsArr=workWithProduct.getAllProducts();
    this.showCart=true;
    //this.cartObj=null;
    this.cartArr=[];
  }
  toggleDisplay()
  {
    this.showCart=!this.showCart;
  }
  sendCartObjFromPlToHomeHandler(cartObj:any)
  {
    //this.cartObj=cartObj;
    // check if the product already exists in the cart
    this.cartArr.push(cartObj);
    console.log(this.cartArr)
  }
}
