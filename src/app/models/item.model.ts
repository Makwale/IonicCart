import { ThrowStmt } from '@angular/compiler';
import { Product } from './product.model';

export class Item{
	private id:number;
	private quantity:number;
	private product: Product;
	private sub_total_price?:number;

	constructor(id, product){
		this.id = id;
		this.product = product;
        this.quantity = 1;
    }
    
	public getId(): number{return this.id}
	
	public setId(id: number): void{
		this.id = id;
	}

    public getQty(): number{return this.quantity}

    public incrementQty() :void {
     this.quantity++;   
    }

    public decrementQty(): void{
        this.quantity--;
	}
	
	public getProduct(): Product{
		return this.product;
	}


}