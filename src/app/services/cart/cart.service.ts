import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/Cart';
import { Products } from 'src/app/shared/Products';
import { CartItem } from 'src/app/shared/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  addToCart(products:Products): void{
    let cartItem = this.cart.items.find(item => item.products.id === products.id);
    if(cartItem){
      this.changeQuantity(products.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(products));
  }
  removeFromCart(productsId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.products.id != productsId);
  }
  changeQuantity(productsId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.products.id === productsId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }

}
