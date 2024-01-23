
import crypto from 'crypto'

const producto = {
    title: "", 
    description: "", 
    price: 0, 
    thumbnail: "", 
    code: "", 
    stock: 0,
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(producto) {
        if (this.products.includes(prod => prod.code === producto.code)) {
            return "El producto ya existe"
        } else {
            
        }

        console.log("Producto creado exitosamente")
        producto.id = crypto.randomBytes().toString('hex')
        this.products.push(producto)
        console.log("Producto agregado exitosamente")
    }
}

getProducts = () => {
    console.log(ProductManager.products)
}

getProductById = () => {
    ProductManager.products.filter(x => x.id === $(id))
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