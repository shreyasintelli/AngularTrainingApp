import { Component, inject } from '@angular/core';
import { Products } from '../products';
import { WorkWithProductsService } from '../work-with-products.service';

@Component({
  selector: 'app-sort-example',
  templateUrl: './sort-example.component.html',
  styleUrls: ['./sort-example.component.css']
})
export class SortExampleComponent {
  productsArr: Products[];
  sortField: string;
  sortOrder: string;
  searchTerm:string;
  showEditProduct:boolean;
  productToEdit:Products | null;
  workWithProduct:WorkWithProductsService
  

  constructor() {
    this.showEditProduct=false;
    this.productToEdit=null;
    this.searchTerm="";
    this.sortField = "productId";
    this.sortOrder = "asc";
    this.workWithProduct = inject(WorkWithProductsService)
    this.productsArr = this.workWithProduct.getAllProducts();
  }

  editProductEventHandler(productToEdit:Products){
    this.showEditProduct=true;
    this.productToEdit=productToEdit;

  }

  sortEventHandler(selectedColumn: string, selectedOrder: string) {
    console.log("Selected Field", selectedColumn);
    this.sortField = selectedColumn;
    console.log("Selected Order", selectedOrder);
    this.sortOrder = selectedOrder;
  }
  searchEventHandler()
  {
    
  }
  searchTermEventHandler(searchTextBox:any)
  {
    console.log("Key pressed",searchTextBox.value);
    this.searchTerm=searchTextBox.value;

  }
  closeProductEventHandler(){
    this.showEditProduct=false
  }
}
