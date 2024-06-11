// import { Injectable } from '@angular/core';
// import { Products } from './products';

// @Injectable({
//   providedIn: 'root'
// })
// export class WorkWithProductsService {
//   productsArr: Products[];

//   constructor() {
//     this.productsArr = [
//       new Products(101, "Apple Macbook Air", 220000, 12, "./assets/macbookAir.jpg", "Apple mac book pro 13 inch grey color 1tb"),
//       new Products(102, "Asus Laptop", 135000, 1, "./assets/asus.jpg", "Asus laptop 500gb Intel Core I7"),
//       new Products(103, "Dell Latitude", 170000, 5, "./assets/dell.jpg", "Dell Latitude 2 in 1, Intel I9 Convertible Laptop"),
//       new Products(104, "HP Laptop", 140000, 7, "./assets/hp.jpg", "Hp Laptop, Active pen support, Intel Core I7 500gb"),
//       new Products(105, "Lenovo Air", 120000, 9, "./assets/lenovo.jpg", "Lenovo 2 in 1 Convertible Intel Core I9 8th gen"),
//     ];
//   }

//   getAllProducts() {
//     return this.productsArr;
//   }

//   getProductDetail(productId: number): Promise<Products | undefined> {
//     return new Promise(resolve => {
//       const product = this.productsArr.find(item => item.productId === productId);
//       resolve(product);
//     });
//   }
// }
import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class WorkWithProductsService {
productsArr:Products[];
  constructor() { 
    this.productsArr=[
      new Products(101,"Apple Macbook",220000,12,"./assets/macbookAir.jpg","Apple mac book pro 13 inch grey color 1tb"),
      new Products(102,"Asus Laptop",135000,1,"./assets/asus.jpg","Asus laptop 500gb Intel Core I7"),
      new Products(103,"Dell Latitude",170000,5,"./assets/dell.jpg","Dell Latitude 2 in 1, Intel I9 Convertible Laptop"),
      new Products(104,"HP Laptop",140000,7,"./assets/hp.jpg","Hp Laptop, Active pen support, Intel Core I7 500gb"),
      new Products(105,"Lenovo Air",120000,9,"./assets/lenovo.jpg","Lenovo 2 in 1 Convertible Intel Core I9 8th gen"),
    ]
  }

  getAllProducts()
  {
    return this.productsArr;
  }

  getProductDetail(productId:number)
  {
    return this.productsArr.find(item=>item.productId == productId);
  }

}
