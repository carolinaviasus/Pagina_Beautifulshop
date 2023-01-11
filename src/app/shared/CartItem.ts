import { Products } from "./Products";

export class CartItem{
    constructor(products:Products){
        this.products = products;  
      }
      products:Products ;
      quantity:number = 1;
  
      get price():number{
          return this.products.price * this.quantity;
      } 

}