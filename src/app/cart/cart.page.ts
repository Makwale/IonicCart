import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  itemList;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getItemList();
  }

  incrementQnty(item: Item){
    this.cartService.incrementQnty(item.getId());
  }

  decrementQnty(item: Item){
    this.cartService.decrementQnty(item.getId());
  }
  getItemList(){
    return this.itemList = this.cartService.getItemList();
  }

  delete(item: Item){

    this.cartService.deleteItem(item.getId());

  }

}
