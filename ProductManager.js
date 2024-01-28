
import crypto from 'crypto'

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos deben ser llenados");
            return;
        } if (this.products.some(product => product.code === code)){
            this.console.error("Este producto ya existe");
            return;
        } 

        const NEWPRODUCT = {
            id: this.products.length + 1, // crypto.randomBytes().toString('hex')
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(NEWPRODUCT);
        console.log("Producto ", NEWPRODUCT.title, " fue agregado exitosamente");



        const producto = {
            title: "", 
            description: "", 
            price: 0, 
            thumbnail: "", 
            code: "", 
            stock: 0,
        }
        
    }

    getProducts() {
        return console.log(ProductManager.products)
    }
    
    getProductById(){
        if (ProductManager.products.filter(x => x.id === $(id))){
            
        }
    }
}

class Producto extends  {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = id;
    }
}


