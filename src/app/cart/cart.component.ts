import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() cartArr:any[];
constructor( private router :Router)
{
  this.cartArr=[];
}
  ngOnInit(): void {
    console.log(this.cartArr)
  }
log(){
  console.log(this.cartArr);
}
redirectToPayment(){
  this.router.navigate(['payments'])

}

}
