import { NumberValueAccessor } from '@angular/forms';

export class Product{
	private id:number;
	private name:string;
	private imgURL:string;
	private unitPrice:number;

	constructor(id, name, imgURL, unitPrice){
		this.id = id;
		this.name = name;
		this.imgURL = imgURL;
		this.unitPrice = unitPrice;
	}

	public getId(): number{return this.id;}

	public getName(): string{return this.name;}

	public getImgURL(): string{return this.imgURL;}

	public getUnitPrice(): number{return this.unitPrice;}

	public equal(product: Product): boolean{
		if(this.id === product.getId()){
			return true;
		}
		return false;
	}
}