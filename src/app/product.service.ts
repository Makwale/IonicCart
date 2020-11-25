import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
	private productList: Product[];

  constructor() { 
  	this.productList = [new Product(1,"The Vege-Express 1", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 ),
  	new Product(2,"The Vege-Express 2", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 ),
  	new Product(3,"The Vege-Express 3", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 ),
  	new Product(4,"The Vege-Express 4", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 ),
  	new Product(5,"The Vege-Express 5", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 )];
  }

  public getProducts(): Product[]{return this.productList;}
}


