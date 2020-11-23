import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	private itemList = [];
  constructor() { }

  public addItem(item): void{
  	this.itemList.push({name:"Burger", sub_total_price:35 });
  }

  public getItemList(): Item[]{return this.itemList}

}

class Item{
	id?:number;
	name:string;
	quantity?:string;
	sub_total_price?:number;
}
