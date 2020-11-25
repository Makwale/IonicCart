import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Item } from './models/item.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
	private itemList: Item[] = [];
	private itemId = 0;
  constructor() { }

  public addItem(product: Product ): void{

  	this.itemId++;
	this.itemList.push(new Item(this.itemId,product));
	
  }

  public incrementQnty(id: number): void{
	for(let item of this.itemList){
		if(item.getId() === id){
			item.incrementQty();
			break;
		}
	}
  }

  public decrementQnty(id:number): void{
    for(let item of this.itemList){
		if(item.getId() === id){
			if(item.getQty() > 1){
				item.decrementQty();
			}
			break;
		}
	}
  }

  public getItemList(): Item[]{return this.itemList}

  public getTotalItems(): number{ return this.itemList.length;}

  public deleteItem(id: number): void {
		
		this.itemList.splice(id - 1, 1);
		if(this.itemList.length > 0){
			console.log("Inside");
			for(let index = 0; index  <= this.itemList.length; index++){
				if(this.itemList[index] != undefined){
					this.itemId = index;
					this.itemList[index].setId(this.itemId + 1);
				}
				
			}
		}
	}

	public equal(product: Product): boolean{
		for(let index = 0; index < this.itemList.length; index++){
			if(this.itemList[index].getProduct().equal(product)){
			  	alert("Item exist");
				return true;
			}
		 }
		return false;
	}

}