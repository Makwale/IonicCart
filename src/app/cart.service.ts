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
	totalItems = 0;
  constructor() { }

  public addItem(product: Product ): void{

	if(this.itemList.length == 0){
			this.itemList.push(new Item(this.itemId + 1 ,product, 1));
			this.itemId++;
			console.log(this.itemId);
			this.totalItems++;
			alert("Item added");
			
	}else if(this.itemList.length > 0){
		  for(let item of this.itemList){
			  if(item.getProduct().equal(product) == false){
				this.itemList.push(new Item(this.itemId ,product, 1));
				this.itemId++;
				this.totalItems++
				console.log(this.itemId);
				break;
			  }
		  }
	}

	
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
	  return this.totalItems;
  }

  deleteItem(id) {
		
		console.log(this.itemList[id]);
		

		// for (let index = 0; index  < this.itemList.length; index++){
		// 	this.itemList[index].setId(index + 1);
		// }
	}

}