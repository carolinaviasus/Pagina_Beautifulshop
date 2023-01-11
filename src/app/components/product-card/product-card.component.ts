import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{
  @Input() product :any ;
  constructor(private router : Router,
   private cartService: CartService ) { }

  ngOnInit(): void {
  }
  productView(id : number){
    this.router.navigateByUrl(`product-view/${id}`)
  }
  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }
}
