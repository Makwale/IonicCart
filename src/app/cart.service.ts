import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Item } from './models/item.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
	private itemList: Item[] = [];
	itemId = 0;
  constructor() { }

  public addItem(product: Product ): void{

  	this.itemId++;
	this.itemList.push(new Item(this.itemId,product));
	
  }

  incrementQnty(id){
	for(let item of this.itemList){
		if(item.getId() === id){
			item.incrementQty();
			break;
		}
	}
  }

  decrementQnty(id) {
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

  getTotalItems(){
	  return this.itemList.length;
  }

  deleteItem(id) {
		
		this.itemList.splice(id - 1, 1);
		
		for(let index = 0; index  <= this.itemList.length; index++){
			this.itemId = index;
			this.itemList[index].setId(this.itemId + 1);
		}
	}

	equal(product){
		for(let index = 0; index < this.itemList.length; index++){
			if(this.itemList[index].getProduct().equal(product)){
			  	alert("Item exist");
				return true;
			}
		 }
		return false;
	}

}