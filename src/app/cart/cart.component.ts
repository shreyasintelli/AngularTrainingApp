import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() cartArr:any[];
constructor()
{
  this.cartArr=[];
}
  ngOnInit(): void {
    console.log(this.cartArr)
  }
log(){
  console.log(this.cartArr);
}

}
