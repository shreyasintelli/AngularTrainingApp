import { Component, inject } from '@angular/core';
import { Products } from '../products';
import { WorkWithProductsService } from '../work-with-products.service';


@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent {
  showEditProduct:boolean;
  productsArr:Products[];
  productToBeEdited:Products | null;
  workWithProduct:WorkWithProductsService
  constructor()
  {
    this.showEditProduct=false;
    this.workWithProduct= inject(WorkWithProductsService)

    this.productsArr= this.workWithProduct.getAllProducts()
    this.productToBeEdited=null;
  }
  editEventHandler(productToBeEdited:Products)
  {
    this.showEditProduct=true;
    this.productToBeEdited=productToBeEdited;// reference to the element on which edit has been clicked
  }

}
