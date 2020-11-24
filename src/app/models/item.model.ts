import { ThrowStmt } from '@angular/compiler';
import { Product } from './product.model';

export class Item{
	id:number;
	quantity:number;
	product: Product;
	sub_total_price?:number;

	constructor(id,product, quantity){
		this.id = id;
		this.product = product;
        this.quantity = quantity;
    }
    
	getId(){return this.id}
	
	setId(id){
		this.id = id;
	}

    getQty(){return this.quantity}

    incrementQty(){
     this.quantity++;   
    }

    decrementQty(){
        this.quantity--;
    }
	getProduct(){
		return this.product;
	}
}