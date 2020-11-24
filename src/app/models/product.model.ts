export class Product{
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

	equal(product: Product): boolean{
		return this.id == product.getId();
	}
}