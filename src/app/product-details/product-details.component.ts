// import { Component, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { WorkWithProductsService } from '../work-with-products.service';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.css']
// })
// export class ProductDetailsComponent {
//   @Input()pId:string | undefined;
//   selectedProductId:string;
//   productId: number;
//   constructor(private activatedRoute:ActivatedRoute ,private productsArrayService :WorkWithProductsService){
//     this.selectedProductId=this.activatedRoute.snapshot.paramMap.get("pId")?? "undefined";
//     // this.selectedProductId=this.activatedRoute.snapshot.params.get("pId")
//     var productId = parseInt(this.selectedProductId);
//     productsArrayService.getProductDetail(this.productId)
    
//   }

// }


// import { Component, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { WorkWithProductsService } from '../work-with-products.service';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.css']
// })
// export class ProductDetailsComponent {
//   @Input() pId?: string;
//   selectedProductId: string;
//   productId: number;
//   selectedProduct: any; // Add this line to store the selected product details

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private productsArrayService: WorkWithProductsService
//   ) {
//     const paramValue = this.activatedRoute.snapshot.paramMap.get('pId');
//     this.selectedProductId = paramValue? String(paramValue) : '';
//     this.productId = Number.parseInt(this.selectedProductId, 10);
//     if (!isNaN(this.productId)) {
//       this.productsArrayService.getProductDetail(this.productId).then(product => {
//         this.selectedProduct = product; // Store the product details
//         // Log the product details for debugging
//       });
//     }
//   }
// }

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkWithProductsService } from '../work-with-products.service';
import { Products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() pId:string;
  selectedProductId: string;
  selectedProduct:Products|null;
  constructor(private activatedRoute:ActivatedRoute,private productsArrayService:WorkWithProductsService)
  {
    //this.selectedProductId=this.activatedRoute.snapshot.params["pId"]
    this.selectedProductId=this.activatedRoute.snapshot.paramMap.get("pId") ?? "undefined";
    this.pId="";
    var productId=parseInt(this.selectedProductId);
    var product=productsArrayService.getProductDetail(productId);
    if(product)
      {
        this.selectedProduct=product;
      }
    else
    {
      this.selectedProduct=null;
    
    }

  }

}
