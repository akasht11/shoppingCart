export class Product {
    id: number;
    name: string;
    mname: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id: number, name: string, mname: string, description: string, price: number, imagUrl: string){
        this.id = id;
        this.name = name;
        this.mname = mname;
        this.description = description;
        this.price = price;
        this.imageUrl = imagUrl;
    }
}
