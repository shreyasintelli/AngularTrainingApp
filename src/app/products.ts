export class Products {
    productId:number;
    productName:string;
    price:number;
    quantity:number;
    imgUrl:string;
    description:string;

    constructor(pId:number,pName:string,price:number,quantity:number,imgUrl:string,desc:string)
    {
        this.productId=pId
        this.description=desc;
        this.imgUrl=imgUrl;
        this.productName=pName;
        this.price=price;
        this.quantity=quantity;
    }
}
