import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
	private productList: Product[];
  constructor() { 
  	this.productList = [new Product(1,"The Vege-Express", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 ),
  	new Product(1,"The Vege-Express", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 ),
  	new Product(1,"The Vege-Express", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 ),
  	new Product(1,"The Vege-Express", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 ),
  	new Product(1,"The Vege-Express", 
  		"http://static.pratico-pratiques.com/uploads/images/recipe/orig/d14efd54c4b1015fb8ccb89a9e98aeeb/burger-vege-teriyaki.jpeg",
  		25 )];
  }

  public getProducts(){return this.productList;}
}

class Product{
	id:number;
	name:string;
	imgURL:string;
	unitPrice:number;

	constructor(id, name, imgURL, unitPrice){
		this.id = id;
		this.name = name;
		this.imgURL = imgURL;
		this.unitPrice = unitPrice;
	}

	public getId(){return this.id;}

	public getName(){return this.name;}

	public getImgURL(){return this.imgURL;}

	public getUnitPrice(){return this.unitPrice;}
}
