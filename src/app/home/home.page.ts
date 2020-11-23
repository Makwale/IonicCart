import { Component } from '@angular/core';

import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	products;
  constructor(private cartService: CartService,
  	private productService: ProductService) {
  	this.getProducts();
  }

  public addToCart(product){
  	this.cartService.addItem(product);
  	console.log(this.cartService.getItemList())
  }

  public getProducts(){
  	this.products = this.productService.getProducts();
  }

}
