export class Cartitem {
  id: number;
  productid: number;
  productname: string;
  quantity: number;
  price: number;
  imgurl: string;

  constructor(
    id: number,
    productid: number,
    quantity: number,
    price: number,
    productname: string,
    imgurl: string
  ) {
    this.id = id;
    this.productid = productid;
    this.quantity = quantity;
    this.price = price;
    this.productname = productname;
    this.imgurl = imgurl;
  }
}
