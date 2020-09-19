export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgurl: string;

  constructor(
    id: number,
    name: string,
    description: string = '',
    price: number = 0,
    imgurl: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imgurl = imgurl;
  }
}
