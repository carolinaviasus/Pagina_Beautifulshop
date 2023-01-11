import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}
  products: Array<any> = [];
  singleProduct: any;
  ngOnInit(): void {
    let id = 0;
    this.activatedRoute.paramMap.subscribe((data: any) => {
      id = data.params.id;
      this.productService.getProducts('products').subscribe(
        (res: any) => {
          this.products = res;
          this.products = this.products.filter((data: any) => data.id == id);
          if (this.products.length <= 0) {
            this.router.navigateByUrl('');
          }
          this.singleProduct = this.products[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  addToCart() {
    this.cartService.addToCart(this.products[0]);
    this.router.navigateByUrl('/cart-page');
  }
}
