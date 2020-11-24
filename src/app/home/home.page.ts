import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  	private productService: ProductService, private router: Router) {
  	this.getProducts();
  }

  public addToCart(product){
  	if(!this.cartService.equal(product)){
	  this.cartService.addItem(product);
	}

  }

  public getProducts(){
  	this.products = this.productService.getProducts();
  }

  navigateToCart(){
    this.router.navigateByUrl("cart");
  }

  getTotalItems(){
    return this.cartService.getTotalItems();
  }

}
